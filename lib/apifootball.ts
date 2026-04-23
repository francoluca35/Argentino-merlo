export type NextMatch = {
	homeTeam: string;
	awayTeam: string;
	date: string;
	time: string;
	stadium: string;
};

type ApiFootballEvent = {
	match_date?: string;
	match_time?: string;
	match_status?: string;
	match_hometeam_name?: string;
	match_awayteam_name?: string;
	match_stadium?: string;
};

const FALLBACK_NEXT_MATCH: NextMatch = {
	homeTeam: "Argentino",
	awayTeam: "Deportivo M.",
	date: "Sáb 26 Abr",
	time: "15:30 hs",
	stadium: "Estadio Merlo Norte",
};

const APIFOOTBALL_BASE_URL = "https://apiv3.apifootball.com/";
const PRIMERA_B_LEAGUE_IDS = ["40", "1188"];
const TARGET_TEAM = "argentino de merlo";

function buildDateRange() {
	const now = new Date();
	const from = now.toISOString().slice(0, 10);
	const toDate = new Date(now);
	toDate.setDate(now.getDate() + 120);
	const to = toDate.toISOString().slice(0, 10);

	return { from, to };
}

function formatDateForHero(dateValue?: string) {
	if (!dateValue) return FALLBACK_NEXT_MATCH.date;

	const date = new Date(`${dateValue}T12:00:00`);
	if (Number.isNaN(date.getTime())) return FALLBACK_NEXT_MATCH.date;

	return new Intl.DateTimeFormat("es-AR", {
		weekday: "short",
		day: "2-digit",
		month: "short",
	})
		.format(date)
		.replace(".", "")
		.replace(",", "")
		.replace(/\s+/g, " ")
		.trim();
}

function formatTimeForHero(timeValue?: string) {
	if (!timeValue) return FALLBACK_NEXT_MATCH.time;
	const normalized = timeValue.slice(0, 5);
	return `${normalized} hs`;
}

function isUpcomingMatch(event: ApiFootballEvent, now: Date) {
	if (!event.match_date || !event.match_time) return false;
	if (!event.match_hometeam_name || !event.match_awayteam_name) return false;

	const status = (event.match_status ?? "").toLowerCase();
	if (
		status.includes("finished") ||
		status.includes("after et") ||
		status.includes("after pen") ||
		status.includes("cancelled") ||
		status.includes("postponed")
	) {
		return false;
	}

	const eventDate = new Date(`${event.match_date}T${event.match_time}:00`);
	if (Number.isNaN(eventDate.getTime())) return false;
	if (eventDate.getTime() < now.getTime()) return false;

	const home = event.match_hometeam_name.toLowerCase();
	const away = event.match_awayteam_name.toLowerCase();
	return home.includes(TARGET_TEAM) || away.includes(TARGET_TEAM);
}

function pickNextMatch(events: ApiFootballEvent[]) {
	const now = new Date();
	const upcoming = events.filter((event) => isUpcomingMatch(event, now));

	upcoming.sort((a, b) => {
		const aDate = new Date(`${a.match_date}T${a.match_time}:00`).getTime();
		const bDate = new Date(`${b.match_date}T${b.match_time}:00`).getTime();
		return aDate - bDate;
	});

	return upcoming[0];
}

async function fetchLeagueEvents(
	apiKey: string,
	leagueId: string,
	from: string,
	to: string,
) {
	const params = new URLSearchParams({
		action: "get_events",
		APIkey: apiKey,
		league_id: leagueId,
		from,
		to,
		timezone: "America/Argentina/Buenos_Aires",
	});

	const response = await fetch(`${APIFOOTBALL_BASE_URL}?${params.toString()}`, {
		next: { revalidate: 1800 },
	});

	if (!response.ok) return [];

	const data = (await response.json()) as ApiFootballEvent[] | { error?: number };
	if (!Array.isArray(data)) return [];
	return data;
}

export async function getNextArgentinoMatch(): Promise<NextMatch> {
	const apiKey = process.env.APIFOOTBALL_API_KEY;
	if (!apiKey) return FALLBACK_NEXT_MATCH;

	try {
		const { from, to } = buildDateRange();

		const [eventsA, eventsB] = await Promise.all(
			PRIMERA_B_LEAGUE_IDS.map((leagueId) =>
				fetchLeagueEvents(apiKey, leagueId, from, to),
			),
		);

		const nextMatch = pickNextMatch([...eventsA, ...eventsB]);
		if (!nextMatch) return FALLBACK_NEXT_MATCH;

		return {
			homeTeam: nextMatch.match_hometeam_name ?? FALLBACK_NEXT_MATCH.homeTeam,
			awayTeam: nextMatch.match_awayteam_name ?? FALLBACK_NEXT_MATCH.awayTeam,
			date: formatDateForHero(nextMatch.match_date),
			time: formatTimeForHero(nextMatch.match_time),
			stadium: nextMatch.match_stadium || "Estadio a confirmar",
		};
	} catch {
		return FALLBACK_NEXT_MATCH;
	}
}

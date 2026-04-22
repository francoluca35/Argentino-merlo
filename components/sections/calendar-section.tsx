import { Reveal } from "@/components/reveal";
import { matchItems, type MatchItem } from "@/lib/site-data";

function VenueBadge({ venue }: { venue: MatchItem["venue"] }) {
	if (venue === "local") {
		return (
			<span className="font-heading inline-block rounded border border-celeste/30 bg-celeste/15 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-celeste">
				Local
			</span>
		);
	}
	return (
		<span className="font-heading inline-block rounded border border-white/10 bg-white/[0.06] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-text-muted">
			Visitante
		</span>
	);
}

export function CalendarSection() {
	return (
		<section
			id="calendario"
			aria-labelledby="fixture-heading"
			className="scroll-mt-[72px] bg-club-gray px-8 py-16 md:px-12 lg:px-20 lg:py-20"
		>
			<Reveal>
				<p className="font-heading mb-2 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-celeste">
					Torneo AFA 2026
				</p>
				<h2
					id="fixture-heading"
					className="font-display text-[clamp(2.5rem,4vw,3.5rem)] tracking-[0.04em]"
				>
					Fixture
				</h2>
			</Reveal>

			<ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
				{matchItems.map((match) => (
					<li key={match.id}>
						<Reveal>
							<article className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-white/[0.07] bg-white/[0.04] px-5 py-5 transition-[border-color,background-color] hover:border-celeste/30 hover:bg-celeste/5">
								<div className="min-w-[52px] text-center">
									<p className="font-display text-[2rem] leading-none text-celeste">
										{match.day}
									</p>
									<p className="font-heading text-[0.7rem] font-bold uppercase tracking-[0.15em] text-text-muted">
										{match.month}
									</p>
								</div>
								<div className="min-w-0 flex-1 text-center">
									<p className="font-heading text-[0.95rem] font-bold uppercase tracking-[0.06em]">
										{match.home}
									</p>
									<p className="font-heading my-1 text-[0.7rem] text-text-muted">vs</p>
									<p className="font-heading text-[0.95rem] font-bold uppercase tracking-[0.06em]">
										{match.away}
									</p>
									<p className="font-heading mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-text-muted">
										{match.competition}
									</p>
								</div>
								<div className="min-w-[90px] text-right">
									<VenueBadge venue={match.venue} />
								</div>
							</article>
						</Reveal>
					</li>
				))}
			</ul>
		</section>
	);
}

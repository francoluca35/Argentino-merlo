import { Reveal } from "@/components/reveal";

const STATS = [
	{ value: "1938", label: "Año de Fundación" },
	{ value: "28", label: "Jugadores en Plantel" },
	{ value: "7", label: "Divisiones Inferiores" },
	{ value: "AFA", label: "Organismo Rector" },
] as const;

export function StatsSection() {
	return (
		<section
			id="club"
			aria-labelledby="club-stats-heading"
			className="scroll-mt-[72px] border-y border-celeste/15"
		>
			<h2 id="club-stats-heading" className="sr-only">
				Datos institucionales del club
			</h2>
			<Reveal className="grid grid-cols-2 divide-x divide-y divide-celeste/10 md:grid-cols-4 md:divide-y-0">
				{STATS.map((stat) => (
					<div
						key={stat.label}
						className="px-6 py-8 text-center transition-colors hover:bg-celeste/5 md:px-8 md:py-10"
					>
						<p className="font-display text-5xl leading-none tracking-[0.02em] text-celeste md:text-[3rem]">
							{stat.value}
						</p>
						<p className="font-heading mt-1 text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-text-muted">
							{stat.label}
						</p>
					</div>
				))}
			</Reveal>
		</section>
	);
}

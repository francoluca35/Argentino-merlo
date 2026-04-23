import { Reveal } from "@/components/reveal";
import { playerItems } from "@/lib/site-data";

export function SquadSection() {
	return (
		<section
			id="plantel"
			aria-labelledby="plantel-heading"
			className="scroll-mt-[120px] px-8 py-16 md:px-12 lg:px-20 lg:py-20"
		>
			<Reveal>
				<p className="font-heading mb-2 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-celeste">
					Temporada 2026
				</p>
				<h2
					id="plantel-heading"
					className="font-display text-[clamp(2.5rem,4vw,3.5rem)] tracking-[0.04em]"
				>
					Plantel Profesional
				</h2>
			</Reveal>

			<ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{playerItems.map((player) => (
					<li key={player.id}>
						<Reveal>
							<article className="relative cursor-pointer overflow-hidden rounded-lg bg-club-gray transition-transform hover:-translate-y-1">
								<div className="relative w-full pb-[120%] bg-[linear-gradient(135deg,#0a1628_0%,#0d2240_100%)]">
									<img
										src={player.imageSrc}
										alt={player.imageAlt}
										className="absolute inset-0 h-full w-full object-cover"
										loading="lazy"
									/>
									<div
										className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-[linear-gradient(to_top,rgba(10,10,10,0.95),transparent)]"
										aria-hidden
									/>
									<p
										className="font-display absolute left-3 top-3 text-[1.75rem] leading-none text-celeste/50"
										aria-label={`Camiseta número ${player.number}`}
									>
										{player.number}
									</p>
									<div className="absolute inset-x-0 bottom-0 z-[2] p-3.5">
										<p className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.15em] text-celeste">
											{player.position}
										</p>
										<h3 className="font-heading text-[0.95rem] font-bold uppercase tracking-[0.04em] text-club-white">
											{player.name}
										</h3>
									</div>
								</div>
							</article>
						</Reveal>
					</li>
				))}
			</ul>
		</section>
	);
}

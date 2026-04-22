import { Reveal } from "@/components/reveal";

export function InferioresSection() {
	return (
		<section
			id="inferiores"
			aria-labelledby="inferiores-heading"
			className="scroll-mt-[72px] border-y border-celeste/10 bg-club-dark px-8 py-14 md:px-12 lg:px-20"
		>
			<Reveal className="mx-auto max-w-3xl text-center">
				<p className="font-heading mb-2 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-celeste">
					Formación
				</p>
				<h2
					id="inferiores-heading"
					className="font-display text-[clamp(2rem,3vw,2.75rem)] tracking-[0.04em]"
				>
					Divisiones inferiores
				</h2>
				<p className="mt-4 text-base leading-relaxed text-text-muted">
					Seguimos priorizando la captación y el desarrollo en todas las categorías AFA.
					Pronto vas a poder ver fixture, planteles y noticias de cada división en esta sección.
				</p>
			</Reveal>
		</section>
	);
}

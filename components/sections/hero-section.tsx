import Link from "next/link";
import { CrestHero } from "@/components/crests";

export function HeroSection() {
	return (
		<section
			id="inicio"
			aria-labelledby="hero-title"
			className="relative flex min-h-[640px] h-screen items-end overflow-hidden"
		>
			<div
				className="animate-hero-zoom absolute inset-0 scale-105 bg-[url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1600&q=80')] bg-cover bg-center"
				role="presentation"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.45)_0%,rgba(10,10,10,0)_30%,rgba(10,10,10,0.75)_80%,var(--club-dark)_100%)]"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute right-0 top-0 h-full w-[42%] bg-[linear-gradient(135deg,transparent_0%,rgba(0,174,239,0.18)_100%)] [clip-path:polygon(30%_0,100%_0,100%_100%,0%_100%)]"
				aria-hidden
			/>

			<div className="relative z-[2] grid w-full grid-cols-1 items-end gap-8 px-8 pb-12 pt-28 md:grid-cols-2 md:gap-12 lg:px-20 lg:pb-20">
				<div className="max-w-xl">
					<p className="font-heading animate-fade-up mb-5 inline-block rounded-sm border border-celeste px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-celeste">
						<span aria-hidden>⚽ </span>
						Afiliado a AFA · Merlo Norte, Buenos Aires
					</p>
					<h1
						id="hero-title"
						className="font-display animate-fade-up-delay-150 text-[clamp(3.5rem,7vw,6rem)] leading-[0.95] tracking-[0.03em]"
					>
						<span className="block">Club Atlético</span>
						<span className="block text-celeste">Argentino</span>
						<span className="block">de Merlo</span>
					</h1>
					<p className="animate-fade-up-delay-300 mt-5 max-w-[380px] text-base font-medium leading-relaxed text-text-muted">
						Pasión, identidad y territorio. Desde el corazón del oeste bonaerense,
						representando a Merlo Norte en cada cancha del país.
					</p>
					<div className="animate-fade-up-delay-450 mt-8 flex flex-wrap gap-4">
						<Link
							href="#calendario"
							className="font-heading inline-flex items-center gap-2 rounded bg-celeste px-8 py-3.5 text-[0.9rem] font-black uppercase tracking-[0.12em] text-club-dark no-underline transition-[background-color,transform] hover:bg-celeste-light hover:-translate-y-0.5"
						>
							Ver Próximos Partidos
						</Link>
						<Link
							href="#club"
							className="font-heading inline-flex items-center gap-2 rounded border border-white/25 bg-transparent px-8 py-3.5 text-[0.9rem] font-bold uppercase tracking-[0.12em] text-club-white no-underline transition-[border-color,color,transform] hover:border-celeste hover:text-celeste hover:-translate-y-0.5"
						>
							Conocé el Club
						</Link>
					</div>
				</div>

				<div className="animate-fade-up-delay-200 flex flex-col items-center justify-end gap-6 pb-2 md:items-end md:pb-0">
					<CrestHero className="h-auto w-[min(200px,55vw)] drop-shadow-[0_0_40px_rgba(0,174,239,0.5)]" />
					<aside
						className="w-full max-w-[320px] rounded-lg border border-celeste/30 bg-club-dark/80 px-6 py-4 text-center backdrop-blur-md md:max-w-[280px]"
						aria-labelledby="proximo-partido"
					>
						<h2 id="proximo-partido" className="sr-only">
							Próximo partido
						</h2>
						<p className="font-heading mb-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-celeste">
							Próximo Partido
						</p>
						<p className="font-display flex items-center justify-center gap-3 text-[1.5rem] tracking-[0.06em]">
							<span>Argentino</span>
							<span className="text-sm text-text-muted">vs</span>
							<span>Deportivo M.</span>
						</p>
						<p className="mt-2 text-[0.8rem] font-medium text-text-muted">
							Sáb 26 Abr · 15:30 hs · Estadio Merlo Norte
						</p>
					</aside>
				</div>
			</div>
		</section>
	);
}

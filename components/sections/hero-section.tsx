
import Image from "next/image";
import Link from "next/link";
import {
	FiCalendar,
	FiClock,
	FiMapPin,
	FiShield,
	FiUsers,
} from "react-icons/fi";
import { HiOutlineTicket } from "react-icons/hi2";
import { getNextArgentinoMatch } from "@/lib/apifootball";

export async function HeroSection() {
	const nextMatch = await getNextArgentinoMatch();

	return (
		<section
			id="inicio"
			aria-labelledby="hero-title"
			className="relative flex min-h-[740px] flex-col overflow-hidden"
		>
			<div
				className="animate-hero-zoom absolute inset-0 scale-105 bg-[url('/fmobile.png')] bg-cover bg-center md:bg-[url('/hero.png')]"
				role="presentation"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(5,12,28,0.8)_0%,rgba(7,24,52,0.68)_48%,rgba(8,30,62,0.48)_100%)]"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(0,174,239,0.26)_0%,transparent_40%)]"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 bg-[linear-gradient(to_bottom,transparent_0%,rgba(3,8,20,0.9)_100%)]"
				aria-hidden
			/>
<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.08)_50%,transparent_70%)] animate-shimmer" />
			<div className="relative z-[2] mx-auto grid w-full max-w-[1300px] flex-1 grid-cols-1 items-start gap-10 px-6 pb-10 pt-24 sm:px-10 sm:pt-32 md:items-end lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14 lg:px-16 lg:pt-44 xl:px-20">
				<div className="max-w-[700px]">
					<p className="font-heading animate-fade-up mb-4 inline-flex items-center rounded-md border border-white/30 bg-black/35 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white shadow-[0_6px_18px_rgba(0,0,0,0.3)] backdrop-blur-[1px] sm:text-[0.72rem]">
						<span aria-hidden>⚽ </span>
						&nbsp;Afiliado a AFA · Merlo Norte, Buenos Aires
					</p>
					<h1
						id="hero-title"
						className="font-display animate-fade-up-delay-150 text-[clamp(3.4rem,7vw,6rem)] leading-[0.94] tracking-[0.02em]"
					>
						<span className="block">Club Atlético</span>
						<span className="block text-celeste">Argentino</span>
						<span className="block">de Merlo</span>
					</h1>
					<p className="animate-fade-up-delay-300 mt-5 max-w-[520px] text-[1.05rem] font-medium leading-relaxed text-zinc-200">
						Pasión, identidad y territorio. Desde el corazón del oeste bonaerense,
						representando a Merlo Norte en cada cancha del país.
					</p>
					<div className="animate-fade-up-delay-450 mt-8 flex flex-wrap gap-4">
						<Link
							href="#calendario"
							className="font-heading inline-flex items-center gap-2 rounded-md bg-celeste px-7 py-3.5 text-[0.84rem] font-black uppercase tracking-[0.12em] text-club-dark no-underline 
							shadow-[0_10px_24px_rgba(0,174,239,0.35)] 
							transition-all duration-300 
							hover:bg-celeste-light hover:-translate-y-1 hover:scale-105 
							animate-glow-pulse">
							<HiOutlineTicket className="h-4 w-4" aria-hidden />
							Ver Próximos Partidos
						</Link>
						<Link
							href="#club"
							className="font-heading inline-flex items-center gap-2 rounded-md border border-white/35 bg-white/5 px-7 py-3.5 text-[0.84rem] font-bold uppercase tracking-[0.12em] text-club-white no-underline transition-[border-color,color,background-color,transform] hover:border-celeste hover:bg-celeste/10 hover:text-celeste hover:-translate-y-0.5"
						>
							<FiShield className="h-4 w-4" aria-hidden />
							Conocé el Club
						</Link>
					</div>
				</div>

				<div className="animate-fade-up-delay-200 flex justify-center md:-translate-y-6 md:justify-end lg:translate-x-14 xl:translate-x-20">
					<aside
						className="w-full max-w-[345px] rounded-xl border border-white/10 
bg-white/5 backdrop-blur-xl p-5 text-center 
shadow-[0_20px_60px_rgba(0,0,0,0.6)] 
animate-float-card"
						aria-labelledby="proximo-partido"
					>
						<h2 id="proximo-partido" className="sr-only">
							Próximo partido
						</h2>
						<p className="font-heading mb-3 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-celeste">
							Próximo Partido
						</p>
						<div className="mb-3 flex items-center justify-center gap-3">
							<Image
								src="/logo-oficial.png"
								alt=""
								width={64}
								height={64}
								className="h-14 w-14 rounded-full object-cover"
								aria-hidden
							/>
							<span className="font-heading text-[1.45rem] font-black uppercase tracking-[0.1em] text-celeste">
								vs
							</span>
							<div className="font-display flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/40 bg-[#153a67] text-[1.9rem] font-bold text-white">
								M
							</div>
						</div>
						<div className="font-display mb-1 grid grid-cols-2 gap-3 text-[1.25rem] tracking-[0.04em]">
							<span>{nextMatch.homeTeam}</span>
							<span>{nextMatch.awayTeam}</span>
						</div>
						<div className="mt-4 space-y-2 rounded-lg border border-white/10 bg-black/25 px-3 py-3 text-left">
							<p className="flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-zinc-200">
								<FiCalendar className="h-3.5 w-3.5 text-celeste" aria-hidden />
								{nextMatch.date}
							</p>
							<p className="flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-zinc-200">
								<FiClock className="h-3.5 w-3.5 text-celeste" aria-hidden />
								{nextMatch.time}
							</p>
							<p className="flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-zinc-200">
								<FiMapPin className="h-3.5 w-3.5 text-celeste" aria-hidden />
								{nextMatch.stadium}
							</p>
						</div>
						<Link
							href="#tienda"
							className="font-heading mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-celeste px-4 py-3 text-[0.82rem] font-black uppercase tracking-[0.1em] text-club-dark no-underline transition-[background-color,transform] hover:bg-celeste-light hover:-translate-y-0.5"
						>
							<HiOutlineTicket className="h-4 w-4" aria-hidden />
							Comprar Entradas
						</Link>
					</aside>
				</div>
			</div>

			<div className="relative z-[2] mx-auto -mt-3 hidden w-full max-w-[1200px] grid-cols-4 gap-0 overflow-hidden rounded-xl border border-white/15 bg-black/35 shadow-[0_10px_30px_rgba(0,0,0,0.32)] backdrop-blur-md lg:grid">
				<div className="flex items-center gap-3 border-r border-white/10 px-6 py-4">
					<FiShield className="h-5 w-5 text-celeste" aria-hidden />
					<p className="font-heading text-[0.72rem] uppercase tracking-[0.08em] text-zinc-200">
						Fundado
						<span className="block text-[1rem] font-bold tracking-[0.03em] text-white">
							30 de Agosto de 1906
						</span>
					</p>
				</div>
				<div className="flex items-center gap-3 border-r border-white/10 px-6 py-4">
					<FiUsers className="h-5 w-5 text-celeste" aria-hidden />
					<p className="font-heading text-[0.72rem] uppercase tracking-[0.08em] text-zinc-200">
						Socios
						<span className="block text-[1rem] font-bold tracking-[0.03em] text-white">
							+4.500
						</span>
					</p>
				</div>
				<div className="flex items-center gap-3 border-r border-white/10 px-6 py-4">
					<FiCalendar className="h-5 w-5 text-celeste" aria-hidden />
					<p className="font-heading text-[0.72rem] uppercase tracking-[0.08em] text-zinc-200">
						Estadio
						<span className="block text-[1rem] font-bold tracking-[0.03em] text-white">
							Juan Carlos Brieva
						</span>
					</p>
				</div>
				<div className="flex items-center gap-3 px-6 py-4">
					<FiMapPin className="h-5 w-5 text-celeste" aria-hidden />
					<p className="font-heading text-[0.72rem] uppercase tracking-[0.08em] text-zinc-200">
						Ubicación
						<span className="block text-[1rem] font-bold tracking-[0.03em] text-white">
							Merlo, Bs. As.
						</span>
					</p>
				</div>
			</div>
		</section>
	);
}
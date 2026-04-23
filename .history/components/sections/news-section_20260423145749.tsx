import Image from "next/image";
import { FiArrowRight, FiCalendar } from "react-icons/fi";
import { Reveal } from "@/components/reveal";
import { newsItems } from "@/lib/site-data";

export function NewsSection() {
	const [featured, ...rest] = newsItems;
	const tabs = ["Todas", "Fútbol", "Institucional", "Inferiores", "Prensa"];
	const latestItems = [featured, ...rest].slice(0, 3).filter(Boolean);
	const moreNews = [
		{
			id: "more-1",
			category: "Fútbol",
			title: "Resumen de la fecha: todos los resultados",
			dateLabel: "20 Abr 2025",
			imageSrc: featured?.imageSrc ?? newsItems[0].imageSrc,
			imageAlt:
				featured?.imageAlt ?? "Jugadores celebrando luego del partido en casa",
		},
		{
			id: "more-2",
			category: "Inferiores",
			title: "Las Inferiores siguen dejando todo",
			dateLabel: "19 Abr 2025",
			imageSrc: rest[0]?.imageSrc ?? newsItems[1].imageSrc,
			imageAlt: rest[0]?.imageAlt ?? "Plantel juvenil durante un entrenamiento",
		},
		{
			id: "more-3",
			category: "Institucional",
			title: "Mejoras en el predio de entrenamiento",
			dateLabel: "18 Abr 2025",
			imageSrc:
				"https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=700&q=80",
			imageAlt: "Vista del frente del predio del club en jornada diurna",
		},
		{
			id: "more-4",
			category: "Prensa",
			title: "Nohra: \"El grupo está más unido que nunca\"",
			dateLabel: "17 Abr 2025",
			imageSrc:
				"https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=700&q=80",
			imageAlt: "Conferencia de prensa del entrenador luego del encuentro",
		},
	];

	return (
		<section
	id="noticias"
	aria-labelledby="noticias-heading"
	className="relative overflow-hidden scroll-mt-[120px] bg-[#eff2f6] px-6 py-14 text-[#0a2b54] md:px-10 lg:px-16 lg:py-18"
>
	{/* 🔥 DECORACIÓN TOP */}
	<div className="pointer-events-none absolute top-0 left-0 w-full h-[220px] 
		bg-[url('/noticias.png')] bg-no-repeat bg-cover opacity-90" 
	/>

	<div className="pointer-events-none absolute inset-0 
		bg-[linear-gradient(to_bottom,rgba(0,170,220,0.12),transparent_60%)]" 
	/>

	<div className="pointer-events-none absolute top-0 left-0 w-full h-[180px] 
		bg-[radial-gradient(circle_at_top_left,rgba(0,170,220,0.22),transparent_60%)]" 
	/>
			<div className="mx-auto w-full max-w-[1240px]">
				<Reveal>
					<p className="font-heading mb-1 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-celeste">
						Novedades y Actualidad
					</p>
					<h2
						id="noticias-heading"
						className="font-display text-[clamp(2.5rem,4.8vw,4rem)] leading-none tracking-[0.03em] text-[#102f5d]"
					>
						Noticias <span className="text-celeste">del Club</span>
					</h2>
				</Reveal>

				<Reveal>
					<div className="mt-5 flex flex-wrap gap-2">
						{tabs.map((tab, index) => (
							<button
								key={tab}
								type="button"
								className={`font-heading rounded-md border px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.1em] transition-colors ${
									index === 0
										? "border-celeste bg-celeste text-white"
										: "border-[#d8e0ea] bg-white text-[#24466f] hover:border-celeste/40"
								}`}
							>
								{tab}
							</button>
						))}
					</div>
				</Reveal>

				<div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[1.7fr_0.9fr]">
					{featured ? (
						<Reveal>
							<article className="relative overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(5,24,53,0.18)]">
								<div className="relative min-h-[380px] w-full md:min-h-[440px]">
									<Image
										src={featured.imageSrc}
										alt={featured.imageAlt}
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 68vw"
										priority
									/>
									<div
										className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(7,25,52,0.92)_14%,rgba(7,25,52,0.24)_56%,rgba(7,25,52,0.08)_100%)]"
										aria-hidden
									/>
									<div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
										<p className="font-heading mb-3 inline-flex rounded-md bg-celeste px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.11em] text-white">
											Fútbol Primera
										</p>
										<h3 className="font-heading max-w-[700px] text-[2.2rem] leading-[0.95] font-bold uppercase text-white md:text-[3rem]">
											Triunfo en casa: Argentino ganó 2-0 y sigue en lo más alto
										</h3>
										<p className="mt-3 max-w-[640px] text-[1rem] leading-relaxed text-[#d7e8ff]">
											Con goles de López y Martínez, el Charro se impuso en
											Merlo Norte y estira su racha positiva en el torneo.
										</p>
										<div className="mt-5 flex flex-wrap items-center gap-4">
											<time className="font-heading inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#d9ebff]">
												<FiCalendar className="h-4 w-4 text-celeste" aria-hidden />
												25 Abr 2025
											</time>
											<button
												type="button"
												className="font-heading inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-[0.78rem] font-black uppercase tracking-[0.09em] text-[#0f3f6a] transition hover:bg-[#ecf5ff]"
											>
												Leer Más <FiArrowRight className="h-4 w-4" aria-hidden />
											</button>
										</div>
									</div>
								</div>
							</article>
						</Reveal>
					) : null}

					<Reveal>
						<aside className="h-full rounded-xl border border-[#d8e2ee] bg-white p-4 shadow-[0_8px_20px_rgba(8,33,67,0.1)]">
							<h3 className="font-heading mb-4 text-[1.3rem] font-black uppercase tracking-[0.05em] text-[#153b69]">
								Últimas Noticias
							</h3>
							<div className="space-y-3">
								{latestItems.map((item) => (
									<article key={`latest-${item.id}`} className="flex gap-3 rounded-md border border-[#e6edf5] p-2">
										<div className="relative h-16 w-24 overflow-hidden rounded-md">
											<Image
												src={item.imageSrc}
												alt={item.imageAlt}
												fill
												className="object-cover"
												sizes="96px"
											/>
										</div>
										<div className="min-w-0">
											<p className="font-heading text-[0.62rem] font-bold uppercase tracking-[0.11em] text-celeste">
												{item.category}
											</p>
											<h4 className="mt-1 max-h-[2.4rem] overflow-hidden text-[0.82rem] font-semibold leading-tight text-[#204770]">
												{item.title}
											</h4>
											<time className="mt-1 block text-[0.66rem] font-semibold uppercase text-[#6a83a0]">
												{item.dateLabel}
											</time>
										</div>
									</article>
								))}
							</div>
						</aside>
					</Reveal>
				</div>

				<Reveal>
					<div className="mt-9">
						<div className="mb-4 flex items-center gap-3">
							<h3 className="font-heading text-[1.8rem] font-black uppercase tracking-[0.05em] text-[#143866]">
								Más Noticias
							</h3>
							<div className="h-px flex-1 bg-[#c8d6e7]" />
						</div>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
							{moreNews.map((item) => (
								<article
									key={`more-${item.id}`}
									className="overflow-hidden rounded-xl border border-[#dbe4ef] bg-white shadow-[0_8px_20px_rgba(11,35,63,0.08)]"
								>
									<div className="relative h-40 w-full">
										<Image
											src={item.imageSrc}
											alt={item.imageAlt}
											fill
											className="object-cover"
											sizes="(max-width: 1280px) 50vw, 24vw"
										/>
									</div>
									<div className="p-4">
										<p className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.1em] text-celeste">
											{item.category}
										</p>
										<h4 className="mt-2 min-h-[52px] text-[1.1rem] font-bold leading-tight text-[#1c4472]">
											{item.title}
										</h4>
										<time className="mt-3 block text-[0.74rem] font-bold uppercase text-[#6d86a3]">
											{item.dateLabel}
										</time>
									</div>
								</article>
							))}
						</div>
						<div className="mt-6 text-center">
							<button
								type="button"
								className="font-heading inline-flex items-center justify-center rounded-md border border-celeste bg-white px-7 py-3 text-[0.78rem] font-black uppercase tracking-[0.1em] text-[#0f4d84] transition hover:bg-[#e8f6ff]"
							>
								Ver Todas las Noticias
							</button>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { newsItems } from "@/lib/site-data";

export function NewsSection() {
	const [featured, ...rest] = newsItems;

	return (
		<section
			id="noticias"
			aria-labelledby="noticias-heading"
			className="scroll-mt-[72px] px-8 py-16 md:px-12 lg:px-20 lg:py-20"
		>
			<Reveal>
				<p className="font-heading mb-2 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-celeste">
					Últimas Novedades
				</p>
				<h2
					id="noticias-heading"
					className="font-display text-[clamp(2.5rem,4vw,3.5rem)] tracking-[0.04em]"
				>
					Noticias del Club
				</h2>
			</Reveal>

			<div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[1.6fr_1fr_1fr]">
				{featured ? (
					<Reveal>
						<article className="relative overflow-hidden rounded-lg bg-club-gray">
							<div className="relative w-full pb-[55%]">
								<Image
									src={featured.imageSrc}
									alt={featured.imageAlt}
									fill
									className="object-cover brightness-75 transition-transform duration-500 hover:scale-105"
									sizes="(max-width: 1024px) 100vw, 58vw"
									priority
								/>
								<div
									className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.9)_0%,transparent_55%)]"
									aria-hidden
								/>
							</div>
							<div className="absolute inset-x-0 bottom-0 p-6">
								<p className="font-heading mb-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-celeste">
									{featured.category}
								</p>
								<h3 className="font-heading text-xl font-bold leading-snug text-club-white lg:text-[1.35rem]">
									{featured.title}
								</h3>
								<time
									className="mt-3 block text-[0.75rem] text-text-muted"
									dateTime="2026-04-20"
								>
									{featured.dateLabel}
								</time>
							</div>
						</article>
					</Reveal>
				) : null}

				{rest.map((item) => (
					<Reveal key={item.id}>
						<article className="flex h-full flex-col overflow-hidden rounded-lg bg-club-gray">
							<div className="relative w-full pb-[65%]">
								<Image
									src={item.imageSrc}
									alt={item.imageAlt}
									fill
									className="object-cover brightness-75 transition-transform duration-500 hover:scale-105"
									sizes="(max-width: 1024px) 100vw, 21vw"
								/>
							</div>
							<div className="flex flex-1 flex-col p-5">
								<p className="font-heading mb-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-celeste">
									{item.category}
								</p>
								<h3 className="font-heading flex-1 text-[1.05rem] font-bold leading-snug text-club-white">
									{item.title}
								</h3>
								<time className="mt-3 text-[0.75rem] text-text-muted">
									{item.dateLabel}
								</time>
							</div>
						</article>
					</Reveal>
				))}
			</div>
		</section>
	);
}

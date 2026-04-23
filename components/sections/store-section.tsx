import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { productItems } from "@/lib/site-data";

export function StoreSection() {
	return (
		<section
			id="tienda"
			aria-labelledby="tienda-heading"
			className="relative scroll-mt-[120px] overflow-hidden bg-[linear-gradient(135deg,#041928_0%,#0a1628_50%,#071f35_100%)] px-8 py-16 md:px-12 lg:px-20 lg:py-24"
		>
			<div
				className="pointer-events-none absolute -right-[20%] top-[-50%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,174,239,0.12)_0%,transparent_70%)]"
				aria-hidden
			/>
			<div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
				<Reveal>
					<p className="font-heading mb-2 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-celeste">
						Indumentaria Oficial
					</p>
					<h2
						id="tienda-heading"
						className="font-display text-[clamp(2.5rem,4vw,3.5rem)] tracking-[0.04em]"
					>
						Llevá la
						<br />
						<span className="text-celeste">Pasión</span>
						<br />
						en la Piel
					</h2>
					<p className="mt-4 max-w-md leading-relaxed text-text-muted">
						Camisetas, buzos, gorros y más. Toda la indumentaria oficial del Club Atlético
						Argentino de Merlo. Enviamos a todo el país.
					</p>
					<Link
						href="#tienda"
						className="font-heading mt-8 inline-flex items-center gap-2 rounded bg-celeste px-8 py-3.5 text-[0.9rem] font-black uppercase tracking-[0.12em] text-club-dark no-underline transition-[background-color,transform] hover:bg-celeste-light hover:-translate-y-0.5"
					>
						Ir a la Tienda →
					</Link>
				</Reveal>

				<Reveal>
					<ul className="grid grid-cols-2 gap-4">
						{productItems.map((product) => (
							<li key={product.id}>
								<article className="cursor-pointer rounded-lg border border-white/[0.08] bg-white/[0.04] p-6 text-center transition-[border-color,background-color] hover:border-celeste/30 hover:bg-celeste/[0.07]">
									<p className="mb-3 text-[2.5rem]" aria-hidden>
										{product.icon}
									</p>
									<h3 className="font-heading text-[0.9rem] font-bold uppercase tracking-[0.08em]">
										{product.name}
									</h3>
									<p className="font-heading mt-1 text-[1.1rem] font-bold text-celeste">
										{product.price}
									</p>
								</article>
							</li>
						))}
					</ul>
				</Reveal>
			</div>
		</section>
	);
}

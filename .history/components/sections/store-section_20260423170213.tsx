"use client";

import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiShoppingCart } from "react-icons/fi";
import { LuFeather, LuLock, LuMedal, LuShieldCheck, LuWind } from "react-icons/lu";

const products = [
	{
		name: "Camiseta Titular",
		season: "2024/25",
		price: "$18.500",
		badge: "Nuevo",
		desc: "Diseño oficial utilizado por el plantel. Confeccionada con tecnología de alto rendimiento para máxima comodidad.",
		features: ["Respirable", "Liviana", "Escudo Bordado"],
		featureIcons: [
			<LuWind key="wind" className="h-5 w-5" />,
			<LuFeather key="feather" className="h-5 w-5" />,
			<LuShieldCheck key="shield" className="h-5 w-5" />,
		],
		img: "/tienda/camiseta-titular.png",
		thumbs: [
			"/assets/titular.png",
			"/tienda/camiseta-alternativa.png",
			"/tienda/short.png",
			"/tienda/gorra.png",
		],
	},
	{
		name: "Camiseta Alternativa",
		season: "2024/25",
		price: "$18.500",
		badge: "Nuevo",
		desc: "La camiseta alternativa del Charro. Edición limitada con detalles exclusivos y materiales premium.",
		features: ["Respirable", "Liviana", "Escudo Bordado"],
		featureIcons: [
			<LuWind key="wind" className="h-5 w-5" />,
			<LuFeather key="feather" className="h-5 w-5" />,
			<LuShieldCheck key="shield" className="h-5 w-5" />,
		],
		img: "/tienda/camiseta-alternativa.png",
		thumbs: [
			"/tienda/camiseta-alternativa.png",
			"/tienda/camiseta-titular.png",
			"/tienda/short.png",
			"/tienda/gorra.png",
		],
	},
	{
		name: "Short Oficial",
		season: "2024/25",
		price: "$9.500",
		badge: "Stock",
		desc: "Short oficial del plantel. Liviano y cómodo para entrenar o alentar al Charro desde las tribunas.",
		features: ["Respirable", "Liviano", "Elástico"],
		featureIcons: [
			<LuWind key="wind" className="h-5 w-5" />,
			<LuFeather key="feather" className="h-5 w-5" />,
			<LuShieldCheck key="shield" className="h-5 w-5" />,
		],
		img: "/tienda/short.png",
		thumbs: [
			"/tienda/short.png",
			"/tienda/camiseta-titular.png",
			"/tienda/camiseta-alternativa.png",
			"/tienda/gorra.png",
		],
	},
];

const sizes = ["S", "M", "L", "XL", "XXL"];

export function StoreSection() {
	const [productIndex, setProductIndex] = useState(0);
	const [selectedThumb, setSelectedThumb] = useState(0);
	const [selectedSize, setSelectedSize] = useState("M");

	const product = products[productIndex];

	const prevProduct = () => {
		setProductIndex((i) => (i - 1 + products.length) % products.length);
		setSelectedThumb(0);
		setSelectedSize("M");
	};
	const nextProduct = () => {
		setProductIndex((i) => (i + 1) % products.length);
		setSelectedThumb(0);
		setSelectedSize("M");
	};

	return (
		<section
			id="tienda"
			aria-labelledby="tienda-title"
			className="relative overflow-hidden bg-[#eef3fa] py-0"
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.035]"
				style={{
					backgroundImage: "radial-gradient(#0a1e3d 1px, transparent 1px)",
					backgroundSize: "24px 24px",
				}}
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,transparent,#00AEEF,transparent)]"
				aria-hidden
			/>

			<div className="relative mx-auto grid min-h-[600px] max-w-[1400px] grid-cols-1 items-center gap-0 lg:grid-cols-[420px_1fr_380px]">
				<div className="flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-14 lg:py-20">
					<p className="font-heading mb-3 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#00AEEF]">
						Tienda Oficial
					</p>
					<h2
						id="tienda-title"
						className="font-display text-[clamp(2.4rem,4.5vw,3.6rem)] font-black uppercase leading-[0.9] text-[#0a1e3d]"
					>
						Llevá tu pasión
						<br />
						<span className="text-[#00AEEF]">a todos lados</span>
					</h2>
					<div className="mb-5 mt-4 h-[3px] w-10 rounded-full bg-[#f0a500]" />
					<p className="mb-8 max-w-[340px] text-[0.92rem] leading-relaxed text-[#4a5a74]">
						Productos oficiales del Club Atlético Argentino de Merlo. Calidad,
						diseño y toda la identidad del Charro.
					</p>

					<div className="mb-10 flex flex-col gap-3 sm:flex-row sm:gap-6">
						{[
							{
								icon: <LuShieldCheck className="h-4 w-4" />,
								top: "Productos",
								bottom: "Oficiales",
							},
							{
								icon: <LuMedal className="h-4 w-4" />,
								top: "Calidad",
								bottom: "Premium",
							},
							{
								icon: <LuLock className="h-4 w-4" />,
								top: "Compra 100%",
								bottom: "Segura",
							},
						].map((b) => (
							<div key={b.top} className="flex items-center gap-2">
								<span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#00AEEF]/40 bg-white text-[#00AEEF] shadow-sm">
									{b.icon}
								</span>
								<div>
									<p className="font-heading text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#00AEEF]">
										{b.top}
									</p>
									<p className="font-heading text-[0.65rem] font-black uppercase tracking-[0.08em] text-[#0a1e3d]">
										{b.bottom}
									</p>
								</div>
							</div>
						))}
					</div>

					<a
						href="#tienda-catalogo"
						className="font-heading inline-flex w-fit items-center gap-2 rounded-md bg-[#00AEEF] px-7 py-3.5 text-[0.82rem] font-black uppercase tracking-[0.14em] text-white shadow-[0_8px_20px_rgba(0,174,239,0.28)] transition hover:bg-[#0099d4] hover:-translate-y-0.5"
					>
						Ir a la tienda →
					</a>

					<div className="mt-10 flex items-center gap-3">
						<button
							onClick={prevProduct}
							aria-label="Producto anterior"
							className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d0dcea] bg-white text-[#0a1e3d] shadow-sm transition hover:border-[#00AEEF] hover:text-[#00AEEF]"
						>
							<FiChevronLeft className="h-4 w-4" />
						</button>
						{products.map((_, i) => (
							<button
								key={i}
								onClick={() => {
									setProductIndex(i);
									setSelectedThumb(0);
								}}
								aria-label={`Producto ${i + 1}`}
								className={`h-2 rounded-full transition-all ${
									i === productIndex
										? "w-6 bg-[#00AEEF]"
										: "w-2 bg-[#00AEEF]/30 hover:bg-[#00AEEF]/60"
								}`}
							/>
						))}
						<button
							onClick={nextProduct}
							aria-label="Producto siguiente"
							className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d0dcea] bg-white text-[#0a1e3d] shadow-sm transition hover:border-[#00AEEF] hover:text-[#00AEEF]"
						>
							<FiChevronRight className="h-4 w-4" />
						</button>
					</div>
				</div>

				<div className="relative flex flex-col items-center justify-center py-10">
					<div
						className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
						style={{
							background:
								"radial-gradient(circle, rgba(0,174,239,0.12) 0%, rgba(0,174,239,0.04) 50%, transparent 75%)",
						}}
						aria-hidden
					/>
					<p
						className="font-display pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 select-none whitespace-nowrap text-[5rem] font-black uppercase tracking-[0.15em] text-[#0a1e3d]/[0.04] sm:text-[7rem]"
						aria-hidden
					>
						Camiseta
					</p>

					<div className="relative z-[1] h-[360px] w-[320px] sm:h-[440px] sm:w-[380px]">
						<Image
							src={product.thumbs[selectedThumb] ?? product.img}
							alt={product.name}
							fill
							className="object-contain drop-shadow-[0_20px_50px_rgba(0,30,80,0.18)] transition-all duration-500"
							priority
						/>
					</div>

					<div className="relative z-[1] mt-6 flex gap-3">
						{product.thumbs.map((thumb, i) => (
							<button
								key={i}
								onClick={() => setSelectedThumb(i)}
								aria-label={`Ver imagen ${i + 1}`}
								className={`relative h-16 w-16 overflow-hidden rounded-xl border-2 bg-white transition-all ${
									i === selectedThumb
										? "border-[#00AEEF] shadow-[0_0_0_3px_rgba(0,174,239,0.18)]"
										: "border-[#d0dcea] hover:border-[#00AEEF]/50"
								}`}
							>
								<Image src={thumb} alt="" fill className="object-contain p-1.5" />
							</button>
						))}
					</div>
				</div>

				<div className="flex flex-col justify-center border-l border-[#d8e4f0] bg-white/60 px-8 py-16 backdrop-blur-sm sm:px-10 lg:px-12 lg:py-20">
					<span className="font-heading mb-4 inline-flex w-fit items-center rounded-full border border-[#00AEEF]/40 bg-[#00AEEF]/10 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#00AEEF]">
						{product.badge}
					</span>

					<h3 className="font-display text-[1.5rem] font-black uppercase leading-tight text-[#0a1e3d]">
						{product.name}
					</h3>
					<p className="font-display text-[1.1rem] font-bold uppercase text-[#00AEEF]">
						{product.season}
					</p>

					<p className="font-display mt-4 text-[2.2rem] font-black text-[#0a1e3d]">
						{product.price}
					</p>

					<p className="mb-6 mt-3 text-[0.82rem] leading-relaxed text-[#4a5a74]">
						{product.desc}
					</p>

					<div className="mb-6 flex gap-4">
						{product.featureIcons.map((icon, i) => (
							<div key={i} className="flex flex-col items-center gap-2 text-center">
								<span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#00AEEF]/30 bg-[#f0f7ff] text-[#00AEEF]">
									{icon}
								</span>
								<span className="font-heading text-[0.55rem] font-bold uppercase tracking-[0.1em] text-[#4a5a74]">
									{product.features[i]}
								</span>
							</div>
						))}
					</div>

					<div className="mb-8">
						<p className="font-heading mb-3 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#0a1e3d]">
							Talles
						</p>
						<div className="flex gap-2">
							{sizes.map((s) => (
								<button
									key={s}
									onClick={() => setSelectedSize(s)}
									aria-label={`Talle ${s}`}
									className={`font-heading h-9 min-w-[36px] rounded-full border px-2 text-[0.7rem] font-bold uppercase tracking-[0.06em] transition-all ${
										selectedSize === s
											? "border-[#00AEEF] bg-[#00AEEF] text-white shadow-[0_4px_12px_rgba(0,174,239,0.3)]"
											: "border-[#c8d8ea] bg-white text-[#0a1e3d] hover:border-[#00AEEF] hover:text-[#00AEEF]"
									}`}
								>
									{s}
								</button>
							))}
						</div>
					</div>

					<button className="font-heading inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#00AEEF] px-6 py-3.5 text-[0.82rem] font-black uppercase tracking-[0.14em] text-white shadow-[0_8px_20px_rgba(0,174,239,0.28)] transition hover:bg-[#0099d4] hover:-translate-y-0.5">
						<FiShoppingCart className="h-4 w-4" />
						Agregar al carrito
					</button>
				</div>
			</div>
		</section>
	);
}

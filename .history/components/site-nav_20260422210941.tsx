"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LEFT_LINKS = [
	{ href: "#club", label: "El Club", id: "club" },
	{ href: "#plantel", label: "Plantel", id: "plantel" },
	{ href: "#inferiores", label: "Inferiores", id: "inferiores" },
] as const;

const RIGHT_LINKS = [
	{ href: "#calendario", label: "Calendario", id: "calendario" },
	{ href: "#noticias", label: "Noticias", id: "noticias" },
	{ href: "#tienda", label: "Entradas", id: "tienda" },
] as const;

const SECTION_IDS = [
	"inicio",
	"club",
	"noticias",
	"inferiores",
	"calendario",
	"plantel",
	"tienda",
] as const satisfies readonly string[];

const SCROLL_SPY_OFFSET = 140;

function linkDark(active: boolean, compact?: boolean) {
	const sz = compact
		? "text-[0.95rem] font-semibold"
		: "text-[0.62rem] font-bold uppercase tracking-[0.12em] sm:text-[0.68rem] md:text-[0.76rem] lg:text-[0.82rem]";
	return `font-heading whitespace-nowrap ${sz} no-underline transition-colors ${
		active
			? "text-club-dark underline decoration-2 underline-offset-[3px]"
			: "text-club-dark/85 hover:text-club-dark"
	}`;
}

function linkLight(active: boolean, compact?: boolean) {
	const sz = compact
		? "text-[0.95rem] font-semibold"
		: "text-[0.62rem] font-bold uppercase tracking-[0.12em] sm:text-[0.68rem] md:text-[0.76rem] lg:text-[0.82rem]";
	return `font-heading whitespace-nowrap ${sz} no-underline transition-colors ${
		active
			? "text-white underline decoration-white decoration-2 underline-offset-[3px]"
			: "text-white hover:text-white/95"
	}`;
}

function HamburgerIcon({ open }: { open: boolean }) {
	return (
		<span className="relative block h-[18px] w-7" aria-hidden>
			<span
				className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-club-dark transition-all duration-200 ${
					open ? "top-[7px] rotate-45" : ""
				}`}
			/>
			<span
				className={`absolute left-0 top-[7px] h-0.5 w-full rounded-full bg-club-dark transition-opacity duration-200 ${
					open ? "opacity-0" : "opacity-100"
				}`}
			/>
			<span
				className={`absolute left-0 top-[14px] h-0.5 w-full rounded-full bg-club-dark transition-all duration-200 ${
					open ? "top-[7px] -rotate-45" : ""
				}`}
			/>
		</span>
	);
}

export function SiteNav() {
	const [activeId, setActiveId] = useState<string>("inicio");
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const sections = SECTION_IDS.map((id) =>
			document.getElementById(id),
		).filter(Boolean) as HTMLElement[];

		const onScroll = () => {
			let current = "inicio";
			const y = window.scrollY + SCROLL_SPY_OFFSET;
			for (const section of sections) {
				if (section.offsetTop <= y) current = section.id;
			}
			setActiveId(current);
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (!menuOpen) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, [menuOpen]);

	useEffect(() => {
		if (!menuOpen) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setMenuOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [menuOpen]);

	const closeMenu = () => setMenuOpen(false);

	return (
		<header className="fixed inset-x-0 top-0 z-100">
			{/* ——— Mobile (< md): barra celeste, logo izquierda, menú hamburguesa ——— */}
			<div className="pointer-events-none md:hidden">
				<div className="pointer-events-auto px-3 pt-3 sm:px-4 sm:pt-4">
					<div className="flex items-center justify-between rounded-b-3xl bg-celeste px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.22)]">
						<Link
							href="#inicio"
							className="flex shrink-0 items-center gap-2"
							onClick={closeMenu}
							aria-label="Club Atlético Argentino de Merlo — inicio"
						>
							<Image
								src="/logo-oficial.png"
								alt=""
								width={128}
								height={128}
								className="h-11 w-11 rounded-full object-contain "
								priority
								sizes="44px"
							/>
						</Link>

						<nav aria-label="Principal móvil">
							<button
								type="button"
								className="flex items-center justify-center rounded-lg p-2 text-club-dark transition-colors hover:bg-black/10"
								aria-expanded={menuOpen}
								aria-controls="mobile-nav-panel"
								onClick={() => setMenuOpen((o) => !o)}
							>
								<span className="sr-only">
									{menuOpen ? "Cerrar menú" : "Abrir menú"}
								</span>
								<HamburgerIcon open={menuOpen} />
							</button>
						</nav>
					</div>
				</div>

				{menuOpen ? (
					<>
						<button
							type="button"
							className="fixed inset-0 z-90 bg-black/50 backdrop-blur-[2px]"
							aria-label="Cerrar menú"
							onClick={closeMenu}
						/>
						<div
							id="mobile-nav-panel"
							className="pointer-events-auto fixed inset-x-3 top-17 z-100 max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto rounded-2xl border border-white/20 bg-club-dark/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-lg sm:inset-x-6"
							role="dialog"
							aria-modal="true"
							aria-label="Enlaces de navegación"
						>
							<ul className="flex flex-col gap-1 divide-y divide-white/10">
								{[...LEFT_LINKS, ...RIGHT_LINKS].map(({ href, label, id }) => (
									<li key={href} className="py-2 first:pt-0 last:pb-0">
										<Link
											href={href}
											className={
												id === "tienda"
													? `${linkLight(activeId === id, true)} block py-1`
													: `${linkDark(activeId === id, true)} block py-1`
											}
											onClick={closeMenu}
										>
											{label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</>
				) : null}
			</div>

			{/* ——— Tablet / Desktop (md+): pastilla ancha centrada ——— */}
			<div className="pointer-events-none hidden justify-center px-3 pt-4 sm:px-5 sm:pt-5 md:flex md:px-6 md:pt-5 lg:px-10 lg:pt-6 xl:px-12">
				<nav
					aria-label="Principal"
					className="pointer-events-auto w-full max-w-[min(96vw,42rem)] sm:max-w-[min(94vw,48rem)] md:max-w-[min(94vw,56rem)] lg:max-w-[min(92vw,72rem)] xl:max-w-[min(90vw,85rem)] 2xl:max-w-[min(88vw,96rem)]"
				>
					<div className="relative flex min-h-12 items-center overflow-visible rounded-full border border-white/50 bg-celeste py-2 pl-2 pr-2 shadow-[0_10px_36px_rgba(0,0,0,0.28)] backdrop-blur-md sm:min-h-13 sm:pl-4 sm:pr-4 md:min-h-14 md:pl-6 md:pr-6 lg:min-h-15 lg:pl-10 lg:pr-10 xl:pl-14 xl:pr-14 2xl:pl-20 2xl:pr-20">
						<ul className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-x-2 gap-y-1 sm:gap-x-4 md:gap-x-6 lg:gap-x-10 xl:gap-x-14 2xl:gap-x-16 md:pr-1 lg:pr-2">
							{LEFT_LINKS.map(({ href, label, id }) => (
								<li key={href}>
									<Link href={href} className={linkDark(activeId === id)}>
										{label}
									</Link>
								</li>
							))}
						</ul>

						<div className="relative z-20 mx-1 flex w-13 shrink-0 items-center justify-center sm:mx-2 sm:w-16 md:mx-3 md:w-20 lg:mx-5 lg:w-24 xl:mx-6 xl:w-28">
							<Link
								href="#inicio"
								className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-[1.03]"
								aria-label="Club Atlético Argentino de Merlo — inicio"
							>
								<Image
									src="/logo-oficial.png"
									alt=""
									width={160}
									height={160}
									className="h-14 w-14 rounded-full object-contain shadow-[0_8px_28px_rgba(0,0,0,0.35)] ring-[3px] ring-white/90 sm:h-17 sm:w-17 md:h-21 md:w-21 lg:h-24 lg:w-24 xl:h-23 xl:w-23"
									sizes="(max-width: 768px) 56px, (max-width: 1024px) 80px, 92px"
								/>
							</Link>
						</div>

						<ul className="flex min-w-0 flex-1 flex-wrap items-center justify-start gap-x-2 gap-y-1 sm:gap-x-4 md:gap-x-6 lg:gap-x-10 xl:gap-x-14 2xl:gap-x-16 md:pl-1 lg:pl-2">
							{RIGHT_LINKS.map(({ href, label, id }) => (
								<li key={href}>
									<Link
										href={href}
										className={
											id === "tienda"
												? linkLight(activeId === id)
												: linkDark(activeId === id)
										}
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
}

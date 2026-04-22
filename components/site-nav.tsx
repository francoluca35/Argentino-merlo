"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CrestNav } from "@/components/crests";

const NAV_LINKS = [
	{ href: "#club", label: "El Club" },
	{ href: "#plantel", label: "Plantel" },
	{ href: "#inferiores", label: "Inferiores" },
	{ href: "#calendario", label: "Calendario" },
	{ href: "#noticias", label: "Noticias" },
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

export function SiteNav() {
	const [activeId, setActiveId] = useState<string>("inicio");

	useEffect(() => {
		const sections = SECTION_IDS.map((id) =>
			document.getElementById(id),
		).filter(Boolean) as HTMLElement[];

		const onScroll = () => {
			let current = "inicio";
			const y = window.scrollY + 120;
			for (const section of sections) {
				if (section.offsetTop <= y) current = section.id;
			}
			setActiveId(current);
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header className="fixed inset-x-0 top-0 z-[100] flex h-[72px] items-center justify-between border-b border-celeste/15 bg-club-dark/85 px-8 backdrop-blur-[16px] md:px-12 lg:px-16">
			<Link
				href="#inicio"
				className="flex items-center gap-3 no-underline"
				aria-label="Club Atlético Argentino de Merlo — volver al inicio"
			>
				<CrestNav className="h-11 w-11 shrink-0" aria-hidden />
				<span className="font-display text-[1.1rem] leading-tight tracking-[0.08em] text-club-white">
					Argentino
					<br />
					de Merlo
				</span>
			</Link>

			<nav aria-label="Principal">
				<ul className="flex max-w-[min(100%,42rem)] flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-6 lg:gap-10">
					{NAV_LINKS.map(({ href, label }) => {
						const id = href.replace("#", "");
						const isActive = activeId === id;
						return (
							<li key={href}>
								<Link
									href={href}
									className={`font-heading text-[0.72rem] font-bold uppercase tracking-[0.12em] no-underline transition-colors sm:text-[0.85rem] ${
										isActive ? "text-celeste" : "text-text-muted hover:text-club-white"
									}`}
								>
									{label}
								</Link>
							</li>
						);
					})}
					<li>
						<Link
							href="#tienda"
							className="font-heading rounded px-5 py-2 text-[0.85rem] font-black uppercase tracking-[0.1em] text-club-dark no-underline transition-colors bg-celeste hover:bg-celeste-light"
						>
							Entradas
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";
import {
	NAV_LEFT,
	NAV_RIGHT,
	SECTION_IDS,
	type LeftNavEntry,
	type NavDropdown,
} from "@/lib/nav-config";

const SCROLL_SPY_OFFSET = 140;

function isDropdownActive(d: NavDropdown, activeId: string): boolean {
	return d.items.some((i) => i.scrollId === activeId);
}

function navLink(
	active: boolean,
	compact?: boolean,
	variant: "default" | "cta" = "default",
) {
	const sz = compact
		? "text-[1.05rem] font-semibold"
		: "text-[0.72rem] font-bold uppercase tracking-[0.12em] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[0.98rem] xl:text-[1.05rem]";
	const motion =
		"inline-block origin-center font-heading whitespace-nowrap no-underline transition-[color,transform] duration-200 ease-out will-change-transform hover:-translate-y-1 hover:scale-110 motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100";
	if (variant === "cta") {
		return `${motion} ${sz} ${
			active
				? "text-white underline decoration-2 underline-offset-[3px] decoration-white"
				: "text-white hover:text-white/95"
		}`;
	}
	return `${motion} ${sz} ${
		active
			? "text-zinc-900 underline decoration-2 underline-offset-[3px] decoration-zinc-700"
			: "text-zinc-800 hover:text-zinc-900"
	}`;
}

/** Enlaces del panel hamburguesa: fondo blanco, texto oscuro, hover celeste */
function mobileNavLink(
	active: boolean,
	variant: "default" | "cta" = "default",
) {
	const sz =
		"text-[1rem] font-semibold uppercase tracking-[0.07em] sm:text-[1.08rem]";
	const motion =
		"origin-center font-heading whitespace-nowrap no-underline transition-[color,background-color,transform] duration-200 ease-out will-change-transform hover:-translate-y-0.5 hover:scale-[1.02] motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100";
	if (variant === "cta") {
		return `${motion} ${sz} rounded-lg px-2 py-1.5 -mx-2 border-2 ${
			active
				? "bg-celeste/15 text-zinc-900 underline decoration-2 underline-offset-2 decoration-celeste"
				: "text-zinc-900 hover:bg-celeste/15 hover:text-celeste-dark"
		}`;
	}
	return `${motion} ${sz} rounded-lg px-2 py-1 -mx-2 ${
		active
			? "text-zinc-900 underline decoration-2 underline-offset-[3px] decoration-celeste"
			: "text-zinc-900  hover:text-celeste-dark"
	}`;
}

function Chevron({ open }: { open: boolean }) {
	return (
		<svg
			className={`h-3 w-3 shrink-0 transition-transform duration-200 md:h-3.5 md:w-3.5 ${open ? "rotate-180" : ""}`}
			viewBox="0 0 12 12"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.8}
			aria-hidden
		>
			<path d="M3 4.5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export function SiteNav() {
	const [activeId, setActiveId] = useState<string>("inicio");

	const [menuOpen, setMenuOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const hoverLeaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const [mobileSub, setMobileSub] = useState<string | null>(null);

	const cancelScheduledDropdownClose = () => {
		if (hoverLeaveTimerRef.current !== null) {
			clearTimeout(hoverLeaveTimerRef.current);
			hoverLeaveTimerRef.current = null;
		}
	};

	const scheduleDropdownClose = () => {
		cancelScheduledDropdownClose();
		hoverLeaveTimerRef.current = setTimeout(() => setOpenDropdown(null), 220);
	};

	const openDropdownHover = (key: string) => {
		cancelScheduledDropdownClose();
		setOpenDropdown(key);
	};

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
		return () => cancelScheduledDropdownClose();
	}, []);

	useEffect(() => {
		if (!openDropdown) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpenDropdown(null);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [openDropdown]);

	useEffect(() => {
		if (!openDropdown) return;
		const onScroll = () => setOpenDropdown(null);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [openDropdown]);

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

	const closeMenu = () => {
		setMenuOpen(false);
		setMobileSub(null);
	};

	const subItemClassMobile =
		"font-heading block w-full rounded-lg px-3 py-2.5 text-left text-[0.9rem] font-semibold uppercase tracking-[0.06em] text-zinc-900 transition-colors hover:bg-celeste/15 hover:text-celeste-dark sm:text-[0.95rem]";

	/** Ítems del submenú desktop: panel claro tipo mockup */
	const subMenuDesktopItem =
		"font-heading block px-4 py-3 text-left text-[0.82rem] font-semibold uppercase tracking-[0.06em] text-zinc-700 no-underline transition-[color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:bg-zinc-50 hover:text-zinc-900 motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 md:text-[0.88rem] lg:text-[0.92rem]";

	return (
		<header className="fixed inset-x-0 top-0 z-100">
			<div className="pointer-events-none md:hidden">
				<div className="relative z-[110] pointer-events-auto w-full pt-[env(safe-area-inset-top,0px)]">
					<div className="flex h-14 w-full min-w-0 items-center justify-between gap-3 bg-celeste px-3 shadow-[0_8px_24px_rgba(0,0,0,0.2)] sm:px-4">
						<Link
							href="#inicio"
							className="flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12"
							onClick={closeMenu}
							aria-label="Club Atlético Argentino de Merlo — inicio"
						>
							<Image
								src="/logo-oficial.png"
								alt=""
								width={128}
								height={128}
								className="max-h-full max-w-full rounded-full object-contain"
								priority
								sizes="48px"
							/>
						</Link>

						<nav className="flex shrink-0 items-center" aria-label="Principal móvil">
							<button
								type="button"
								className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-club-dark transition-colors hover:bg-black/10 active:bg-black/15 sm:min-h-12 sm:min-w-12"
								aria-expanded={menuOpen}
								aria-controls="mobile-nav-panel"
								onClick={() => setMenuOpen((o) => !o)}
							>
								<span className="sr-only">
									{menuOpen ? "Cerrar menú" : "Abrir menú"}
								</span>
								{menuOpen ? (
									<HiXMark className="h-8 w-8 text-zinc-900" aria-hidden />
								) : (
									<HiOutlineBars3 className="h-8 w-8 text-zinc-900" aria-hidden />
								)}
							</button>
						</nav>
					</div>
				</div>

				{menuOpen ? (
					<>
						<button
							type="button"
							className="pointer-events-auto fixed inset-0 z-[100] bg-black/45 backdrop-blur-[2px]"
							aria-label="Cerrar menú"
							onClick={closeMenu}
						/>
						<div
							id="mobile-nav-panel"
							className="pointer-events-auto fixed left-0 right-0 top-[calc(env(safe-area-inset-top,0px)+3.5rem)] z-[105] flex max-h-[min(58vh,calc(100dvh-env(safe-area-inset-top,0px)-3.5rem-1.5rem))] flex-col overflow-hidden rounded-b-2xl border-x border-b border-zinc-200/90 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:left-4 sm:right-4 sm:rounded-b-2xl"
							role="dialog"
							aria-modal="true"
							aria-label="Enlaces de navegación"
						>
							<div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-4 pt-2 sm:px-5 sm:pb-5 sm:pt-3">
								<ul className="flex flex-col gap-0 divide-y divide-zinc-100">
								{NAV_LEFT.map((entry: LeftNavEntry) => {
									if (entry.type === "link") {
										return (
											<li key={entry.href} className="py-2.5 first:pt-0.5">
												<Link
													href={entry.href}
													className={`${mobileNavLink(activeId === entry.scrollId)} block py-1`}
													onClick={closeMenu}
												>
													{entry.label}
												</Link>
											</li>
										);
									}
									const open = mobileSub === entry.key;
									return (
										<li key={entry.key} className="py-2.5">
											<button
												type="button"
												className={`flex w-full items-center justify-start gap-2.5 py-1 text-left ${mobileNavLink(isDropdownActive(entry, activeId))}`}
												aria-expanded={open}
												onClick={() =>
													setMobileSub(open ? null : entry.key)
												}
											>
												<span>{entry.label}</span>
												<Chevron open={open} />
											</button>
											{open ? (
												<ul className="mt-2 flex flex-col gap-1 border-l border-zinc-200 pl-3">
													{entry.items.map((item) => (
														<li key={item.scrollId}>
															<Link
																href={item.href}
																className={subItemClassMobile}
																onClick={closeMenu}
															>
																{item.label}
															</Link>
														</li>
													))}
												</ul>
											) : null}
										</li>
									);
								})}
								{NAV_RIGHT.map((item) => (
									<li key={item.label} className="py-2.5 last:pb-0">
										<Link
											href={item.href}
											className={`${mobileNavLink(activeId === item.scrollId, item.variant === "cta" ? "cta" : "default")} block py-1`}
											onClick={closeMenu}
										>
											{item.label}
										</Link>
									</li>
								))}
								</ul>
							</div>
						</div>
					</>
				) : null}
			</div>

			<div className="pointer-events-none hidden justify-center px-3 pt-4 sm:px-5 sm:pt-5 md:flex md:px-6 md:pt-5 lg:px-10 lg:pt-6 xl:px-12">
				<nav
					aria-label="Principal"
					className="pointer-events-auto w-full max-w-[min(96vw,42rem)] sm:max-w-[min(94vw,48rem)] md:max-w-[min(94vw,56rem)] lg:max-w-[min(92vw,72rem)] xl:max-w-[min(90vw,85rem)] 2xl:max-w-[min(88vw,96rem)]"
				>
					<div className="relative isolate flex min-h-12 items-stretch overflow-visible rounded-full border border-white/50 bg-celeste py-2 pl-2 pr-2 shadow-[0_10px_36px_rgba(0,0,0,0.28)] backdrop-blur-md sm:min-h-13 sm:pl-4 sm:pr-4 md:min-h-14 md:pl-6 md:pr-6 lg:min-h-15 lg:pl-10 lg:pr-10 xl:pl-14 xl:pr-14 2xl:pl-20 2xl:pr-20">
						<ul className="relative z-30 flex min-h-0 min-w-0 flex-1 flex-wrap items-stretch justify-end gap-x-1 gap-y-1 sm:gap-x-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10 md:pr-1 lg:pr-2">
							{NAV_LEFT.map((entry: LeftNavEntry) => {
								if (entry.type === "link") {
									return (
										<li key={entry.href} className="flex items-center self-stretch">
											<Link
												href={entry.href}
												className={navLink(activeId === entry.scrollId)}
											>
												{entry.label}
											</Link>
										</li>
									);
								}
								const d = entry;
								const active = isDropdownActive(d, activeId);
								const isOpen = openDropdown === d.key;
								return (
									<li
										key={d.key}
										className="relative flex items-center self-stretch"
										data-nav-dropdown={d.key}
										onMouseEnter={() => openDropdownHover(d.key)}
										onMouseLeave={scheduleDropdownClose}
									>
										<button
											type="button"
											className={`${navLink(active)} pointer-events-none inline-flex cursor-default select-none items-center gap-0.5 border-0 bg-transparent p-0 font-inherit`}
											aria-expanded={isOpen}
											aria-haspopup="menu"
											aria-controls={`submenu-${d.key}`}
											id={`nav-trigger-${d.key}`}
											tabIndex={-1}
										>
											{d.label}
											<Chevron open={isOpen} />
										</button>
										<ul
											id={`submenu-${d.key}`}
											role="menu"
											aria-labelledby={`nav-trigger-${d.key}`}
											aria-hidden={!isOpen}
											className={`absolute left-0 top-[calc(100%-1px)] z-50 mt-0 min-w-max max-w-[min(100vw-2rem,22rem)] origin-top overflow-hidden rounded-b-lg rounded-t-none border border-t-0 border-zinc-200/90 bg-white py-1.5 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15)] ring-1 ring-black/[0.06] transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
												isOpen
													? "visible translate-y-0 opacity-100"
													: "invisible pointer-events-none translate-y-2 opacity-0 motion-reduce:translate-y-0"
											}`}
										>
											{d.items.map((item) => (
												<li key={item.scrollId} role="none">
													<Link
														role="menuitem"
														href={item.href}
														tabIndex={isOpen ? 0 : -1}
														className={subMenuDesktopItem}
														onClick={() => {
															cancelScheduledDropdownClose();
															setOpenDropdown(null);
														}}
													>
														{item.label}
													</Link>
												</li>
											))}
										</ul>
									</li>
								);
							})}
						</ul>

						<div className="relative z-10 mx-3 flex w-40 shrink-0 items-center justify-center self-stretch md:mx-4 md:w-44 lg:mx-6 lg:w-48 xl:mx-8 xl:w-52 2xl:mx-10 2xl:w-56">
							<Link
								href="#inicio"
								className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-[1.03]"
								aria-label="Club Atlético Argentino de Merlo — inicio"
							>
								<Image
									src="/logo-oficial.png"
									alt=""
									width={384}
									height={384}
									className="rounded-full object-contain md:h-36 md:w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44 2xl:h-48 2xl:w-48"
									sizes="(max-width: 1024px) 160px, (max-width: 1280px) 176px, 192px"
								/>
							</Link>
						</div>

						<ul className="relative z-30 flex min-h-0 min-w-0 flex-1 flex-wrap items-stretch justify-start gap-x-1 gap-y-1 sm:gap-x-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10 md:pl-1 lg:pl-2">
							{NAV_RIGHT.map((item) => (
								<li key={item.label} className="flex items-center self-stretch">
									<Link
										href={item.href}
										className={navLink(
											activeId === item.scrollId,
											false,
											item.variant === "cta" ? "cta" : "default",
										)}
									>
										{item.label}
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

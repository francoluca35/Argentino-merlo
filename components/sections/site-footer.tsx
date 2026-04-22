const FOOTER_NAV = {
	club: [
		{ href: "#", label: "Historia" },
		{ href: "#", label: "Estadio" },
		{ href: "#", label: "Comisión Directiva" },
		{ href: "#", label: "Socios" },
		{ href: "#", label: "Contacto" },
	],
	futbol: [
		{ href: "#", label: "Primera División" },
		{ href: "#", label: "Reserva" },
		{ href: "#inferiores", label: "Inferiores" },
		{ href: "#", label: "Femenino" },
		{ href: "#calendario", label: "Fixture AFA" },
	],
	info: [
		{ href: "#noticias", label: "Noticias" },
		{ href: "#", label: "Prensa" },
		{ href: "#tienda", label: "Entradas" },
		{ href: "#tienda", label: "Tienda" },
		{ href: "#", label: "Privacidad" },
	],
} as const;

export function SiteFooter() {
	return (
		<footer className="border-t border-celeste/12">
			<div className="grid grid-cols-1 gap-10 px-8 py-12 md:grid-cols-2 md:px-12 lg:grid-cols-4 lg:gap-12 lg:px-20">
				<div>
					<p className="font-display mb-2 text-[1.4rem] tracking-[0.06em]">Argentino de Merlo</p>
					<p className="max-w-[240px] text-[0.85rem] leading-relaxed text-text-muted">
						Club Atlético Argentino de Merlo. Afiliado a AFA. Merlo Norte, Provincia de Buenos Aires.
					</p>
					<ul className="mt-5 flex gap-3" aria-label="Redes sociales">
						<li>
							<a
								className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.06] text-[0.85rem] text-club-white no-underline transition-[background-color,border-color,color] hover:border-celeste hover:bg-celeste hover:text-club-dark"
								href="#"
								aria-label="Instagram"
							>
								ig
							</a>
						</li>
						<li>
							<a
								className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.06] text-[0.85rem] text-club-white no-underline transition-[background-color,border-color,color] hover:border-celeste hover:bg-celeste hover:text-club-dark"
								href="#"
								aria-label="Facebook"
							>
								fb
							</a>
						</li>
						<li>
							<a
								className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.06] text-[0.85rem] text-club-white no-underline transition-[background-color,border-color,color] hover:border-celeste hover:bg-celeste hover:text-club-dark"
								href="#"
								aria-label="X (Twitter)"
							>
								x
							</a>
						</li>
						<li>
							<a
								className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.06] text-[0.85rem] text-club-white no-underline transition-[background-color,border-color,color] hover:border-celeste hover:bg-celeste hover:text-club-dark"
								href="#"
								aria-label="YouTube"
							>
								yt
							</a>
						</li>
					</ul>
				</div>

				<nav aria-labelledby="footer-club">
					<p
						id="footer-club"
						className="font-heading mb-4 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-celeste"
					>
						El Club
					</p>
					<ul className="space-y-2">
						{FOOTER_NAV.club.map((link) => (
							<li key={link.label}>
								<a
									href={link.href}
									className="text-[0.875rem] text-text-muted no-underline transition-colors hover:text-club-white"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<nav aria-labelledby="footer-futbol">
					<p
						id="footer-futbol"
						className="font-heading mb-4 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-celeste"
					>
						Fútbol
					</p>
					<ul className="space-y-2">
						{FOOTER_NAV.futbol.map((link) => (
							<li key={link.label}>
								<a
									href={link.href}
									className="text-[0.875rem] text-text-muted no-underline transition-colors hover:text-club-white"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<nav aria-labelledby="footer-info">
					<p
						id="footer-info"
						className="font-heading mb-4 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-celeste"
					>
						Información
					</p>
					<ul className="space-y-2">
						{FOOTER_NAV.info.map((link) => (
							<li key={link.label}>
								<a
									href={link.href}
									className="text-[0.875rem] text-text-muted no-underline transition-colors hover:text-club-white"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>

			<div className="flex flex-col items-start justify-between gap-4 border-t border-white/[0.05] px-8 py-5 text-[0.78rem] text-text-muted md:flex-row md:items-center md:px-12 lg:px-20">
				<p>© 2026 Club Atlético Argentino de Merlo · Merlo Norte, Buenos Aires</p>
				<p>Afiliado a AFA</p>
			</div>
		</footer>
	);
}

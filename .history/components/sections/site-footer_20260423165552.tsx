"use client";

import Image from "next/image";
import Link from "next/link";
import {
	FiAtSign,
	FiClock,
	FiMapPin,
	FiPhone,
	FiShoppingCart,
	FiYoutube,
} from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
	return (
		<footer className="relative overflow-hidden border-t border-[#d7e1ec] bg-[#f5f8fc] text-[#1b3554]">
			<div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,transparent,#00AEEF,transparent)]" />
			<div className="relative z-10 mx-auto max-w-[1300px] px-6 py-14">
				<div className="grid gap-10 border-b border-[#d3deea] pb-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
					<div>
						<h4 className="font-heading mb-5 text-[1.15rem] font-black uppercase tracking-[0.05em] text-[#243f60]">
							Información de Contacto
						</h4>
						<ul className="space-y-3.5 text-[0.95rem] text-[#3f5977]">
							<li className="flex items-center gap-2.5">
								<FiMapPin className="text-[#7a8fa8]" /> Antezana 3330, Merlo, Buenos Aires, Argentina
							</li>
							<li className="flex items-center gap-2.5">
								<FiClock className="text-[#7a8fa8]" /> Lunes a viernes de 9 a 21
								Hs.
							</li>
							<li className="flex items-center gap-2.5">
								<FiClock className="text-[#7a8fa8]" /> Sábados de 9 a 13 Hs.
							</li>
							<li className="flex items-center gap-2.5">
								<FiAtSign className="text-[#7a8fa8]" /> socios@argentinodemerlo.com.ar
							</li>
							<li className="flex items-center gap-2.5">
								<FiPhone className="text-[#7a8fa8]" /> (11) 0101-0101
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-heading mb-5 text-[1.15rem] font-black uppercase tracking-[0.05em] text-[#243f60]">
							Mapa de Sitio
						</h4>
						<ul className="space-y-2.5 text-[0.95rem] text-[#3f5977]">
							<li>
								<Link href="#club" className="hover:text-celeste">
									Institucional
								</Link>
							</li>
							<li>
								<Link href="#plantel" className="hover:text-celeste">
									Fútbol
								</Link>
							</li>
							<li>
								<Link href="#inferiores" className="hover:text-celeste">
									Actividades
								</Link>
							</li>
							<li>
								<Link href="#sponsors" className="hover:text-celeste">
									Socios
								</Link>
							</li>
							<li>
								<Link href="#tienda" className="hover:text-celeste">
									Contacto
								</Link>
							</li>
						</ul>
					</div>

					<div className="flex items-start lg:justify-end">
						<div className="flex items-center gap-4 rounded-xl  px-5 py-5 ">
							<Image
								src="/logo-oficial.png"
								alt="Club Atlético Argentino de Merlo"
								width={86}
								height={86}
								className="h-[82px] w-[82px] rounded-full object-contain"
							/>
							<p className="font-heading text-[1.6rem] font-black uppercase leading-[0.95] text-[#112b4f]">
								Argentino
								<br />
								de Merlo
							</p>
						</div>
					</div>
				</div>

				<div className="mt-6 flex flex-col items-start justify-between gap-5 text-[0.9rem] text-[#58708b] md:flex-row md:items-center">
					<p>© Club Atlético Argentino de Merlo</p>
					<div className="flex gap-6">
						<Link href="#" className="hover:text-celeste">
							Política de privacidad
						</Link>
						<Link href="#" className="hover:text-celeste">
							Política de cookies
						</Link>
					</div>
					<div className="flex items-center gap-4 text-[1.05rem]">
						<a aria-label="Instagram" className="hover:text-celeste">
							<FaInstagram />
						</a>
						<a aria-label="Facebook" className="hover:text-celeste">
							<FaFacebookF />
						</a>
						<a aria-label="YouTube" className="hover:text-celeste">
							<FiYoutube />
						</a>
						<a aria-label="X" className="hover:text-celeste">
							<FaXTwitter />
						</a>
						<a aria-label="Tienda" className="hover:text-celeste">
							<FiShoppingCart />
						</a>
						<a aria-label="Contacto" className="hover:text-celeste">
							<FaWhatsapp />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export const SiteFooter = Footer;

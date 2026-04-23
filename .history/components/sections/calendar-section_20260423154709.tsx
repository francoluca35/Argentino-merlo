import Image from "next/image";
import {
	FiCalendar,
	FiFlag,
	FiHeart,
	FiMapPin,
	FiShield,
	FiUsers,
} from "react-icons/fi";
import { LuMedal, LuTrophy } from "react-icons/lu";

const timelineItems = [
	{
		year: "1906",
		title: "Fundación",
		desc: "El 30 de agosto de 1906 nace el Club Atlético Argentino de Merlo, con el sueño de un grupo de vecinos que quería ver crecer al deporte en la zona oeste.",
		icon: <FiShield className="h-5 w-5" />,
	},
	{
		year: "Hoy",
		title: "Más Vivo Que Nunca",
		desc: "Con más de 4.500 socios, divisiones formativas y un club que no para de crecer, seguimos escribiendo nuestra historia juntos.",
		icon: <FiUsers className="h-5 w-5" />,
	},

];

const stats = [
	{
		icon: <FiCalendar className="h-6 w-6" />,
		label: "Fundado",
		value: "30 de Agosto de 1906",
	},
	{ icon: <FiUsers className="h-6 w-6" />, label: "Socios", value: "+4.500" },
	{
		icon: <LuTrophy className="h-6 w-6" />,
		label: "Estadio",
		value: "Juan Carlos Brieva",
	},
	{
		icon: <FiMapPin className="h-6 w-6" />,
		label: "Ubicación",
		value: "Merlo Norte, Buenos Aires",
	},
];

const logros = [
	{ icon: <LuTrophy className="h-8 w-8" />, num: "3", label: "Títulos\nde Liga" },
	{
		icon: <FiShield className="h-8 w-8" />,
		num: "2",
		label: "Torneos\nRegionales",
	},
	{ icon: <LuTrophy className="h-8 w-8" />, num: "1", label: "Copa\nProvincial" },
	{
		icon: <LuMedal className="h-8 w-8" />,
		num: "8",
		label: "Campeonatos\nAmateurs",
	},
];

const valores = [
	{
		icon: <FiUsers className="h-8 w-8" />,
		title: "Familia",
		desc: "El club es de todos, y para todos.",
	},
	{
		icon: <FiHeart className="h-8 w-8" />,
		title: "Respeto",
		desc: "Dentro y fuera de la cancha.",
	},
	{
		icon: <FiShield className="h-8 w-8" />,
		title: "Compromiso",
		desc: "Con nuestra gente, nuestro barrio y nuestra historia.",
	},
	{
		icon: <FiFlag className="h-8 w-8" />,
		title: "Pasión",
		desc: "Llevamos estos colores en el corazón.",
	},
];

export function ClubSection() {
	return (
		<section
			id="club"
			aria-labelledby="club-title"
			className="relative overflow-hidden bg-[#f4f7fb] py-20"
		>
			<div
				className="pointer-events-none absolute left-0 top-0 h-28 w-72 opacity-60"
				style={{
					background:
						"radial-gradient(ellipse 80% 60% at 20% 10%, #00AEEF55 0%, transparent 80%)",
					filter: "blur(2px)",
				}}
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute right-0 top-0 h-24 w-56 opacity-40"
				style={{
					background:
						"radial-gradient(ellipse 80% 60% at 80% 10%, #1a3a6b33 0%, transparent 80%)",
				}}
				aria-hidden
			/>

			<div className="mx-auto max-w-[1260px] px-6 sm:px-10 lg:px-16 xl:px-20">
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
					<div>
						<p className="font-heading mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#00AEEF]">
							Nuestra Historia
						</p>
						<h2
							id="club-title"
							className="font-display text-[clamp(2.6rem,5vw,4rem)] font-black leading-[0.92] text-[#0a1e3d]"
						>
							El Club
							<br />
							<span className="text-[#00AEEF]">de Nuestra Gente</span>
						</h2>
						<div className="mb-6 mt-4 h-[3px] w-12 rounded-full bg-[#f0a500]" />
						<p className="mb-10 max-w-[460px] text-[1rem] leading-relaxed text-[#3a4a60]">
							Más de un siglo de pasión, esfuerzo y pertenencia.
							<br />
							Argentino de Merlo es identidad, es barrio, es familia.
						</p>

						<ol className="relative space-y-8 border-l-2 border-[#00AEEF]/30 pl-8">
							{timelineItems.map((item) => (
								<li key={item.year} className="relative">
									<span className="absolute -left-[2.65rem] flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#00AEEF] bg-white text-[#00AEEF] shadow-[0_0_0_4px_#f4f7fb]">
										{item.icon}
									</span>
									<p className="font-heading mb-0.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#00AEEF]">
										{item.year}
									</p>
									<h3 className="font-heading mb-1.5 text-[0.92rem] font-black uppercase tracking-[0.06em] text-[#0a1e3d]">
										{item.title}
									</h3>
									<p className="max-w-[400px] text-[0.85rem] leading-relaxed text-[#4a5a74]">
										{item.desc}
									</p>
								</li>
							))}
						</ol>
					</div>

					<div className="flex flex-col gap-5">
						<div className="relative overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,30,80,0.18)]">
							<Image
								src="/cancha.png"
								alt="Estadio Juan Carlos Brieva – Club Atlético Argentino de Merlo"
								width={700}
								height={400}
								className="h-[260px] w-full object-cover sm:h-[300px]"
							/>
							<div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-0 bg-[rgba(10,26,60,0.88)] backdrop-blur-sm md:grid-cols-4">
								{stats.map((s, i) => (
									<div
										key={s.label}
										className={`flex flex-col items-center gap-1 px-3 py-3 text-center ${
											i < stats.length - 1 ? "border-r border-white/15" : ""
										}`}
									>
										<span className="text-[#00AEEF]">{s.icon}</span>
										<span className="font-heading text-[0.55rem] font-bold uppercase tracking-[0.14em] text-[#8aaecf]">
											{s.label}
										</span>
										<span className="font-display text-[0.78rem] font-black leading-tight text-white">
											{s.value}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="relative w-full max-w-[560px] self-start overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,30,80,0.14)]">
							<div className="grid grid-cols-1 md:grid-cols-[1.05fr_1.25fr]">
								<div className="relative z-10 px-6 py-7 md:px-7">
									<span
										className="font-display block text-[3.1rem] leading-none text-celeste"
										aria-hidden
									>
										&ldquo;
									</span>
									<blockquote className="-mt-6 text-[1.02rem] font-medium leading-relaxed text-[#224163]">
										No es solo fútbol.
										<br />
										Es el lugar donde crecimos,
										<br />
										donde hacemos amigos, y vamos a alentar.
										<br />
									
									</blockquote>
								</div>
								<div className="relative min-h-[170px]">
									<Image
										src="/hinchada.png"
										alt="Hinchada del Club Atlético Argentino de Merlo"
										fill
										className="object-cover"
									/>
									<div
										className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.7)_18%,rgba(255,255,255,0.08)_45%,rgba(255,255,255,0)_62%)]"
										aria-hidden
									/>
									<div
										className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(0,174,239,0.2)_0%,rgba(0,174,239,0.34)_100%)]"
										aria-hidden
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
					<div>
						<h3 className="font-heading mb-8 text-[0.78rem] font-black uppercase tracking-[0.22em] text-[#0a1e3d]">
							Nuestros Logros
						</h3>
						<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
							{logros.map((l) => (
								<div
									key={l.label}
									className="flex flex-col items-center gap-2 text-center"
								>
									<span className="text-[#00AEEF]">{l.icon}</span>
									<span className="font-display text-[2rem] font-black leading-none text-[#0a1e3d]">
										{l.num}
									</span>
									<span className="font-heading whitespace-pre-line text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#4a5a74]">
										{l.label}
									</span>
								</div>
							))}
						</div>
					</div>

					<div>
						<h3 className="font-heading mb-8 text-[0.78rem] font-black uppercase tracking-[0.22em] text-[#0a1e3d]">
							Nuestros Valores
						</h3>
						<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
							{valores.map((v) => (
								<div
									key={v.title}
									className="flex flex-col items-center gap-2 text-center"
								>
									<span className="text-[#00AEEF]">{v.icon}</span>
									<span className="font-heading text-[0.75rem] font-black uppercase tracking-[0.1em] text-[#00AEEF]">
										{v.title}
									</span>
									<span className="text-[0.72rem] leading-snug text-[#4a5a74]">
										{v.desc}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

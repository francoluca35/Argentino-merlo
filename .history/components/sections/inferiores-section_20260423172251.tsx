"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const players = [
	{
		firstName: "Mauro",
		lastName: "Verón",
		number: 10,
		position: "Mediocampista",
		img: "https://placehold.co/700x1000/0d2240/00AEEF?text=Jugador+de+Futbol+1",
	},
	{
		firstName: "Tomás",
		lastName: "Benítez",
		number: 7,
		position: "Delantero",
		img: "https://placehold.co/700x1000/0d2240/00AEEF?text=Jugador+de+Futbol+2",
	},
	{
		firstName: "Juan",
		lastName: "Spaniolo",
		number: 1,
		position: "Arquero",
		img: "https://placehold.co/700x1000/0d2240/00AEEF?text=Jugador+de+Futbol+3",
	},
	{
		firstName: "Matías",
		lastName: "García",
		number: 3,
		position: "Defensor",
		img: "https://placehold.co/700x1000/0d2240/00AEEF?text=Jugador+de+Futbol+4",
	},
	{
		firstName: "Leonel",
		lastName: "Fernández",
		number: 8,
		position: "Mediocampista",
		img: "https://placehold.co/700x1000/0d2240/00AEEF?text=Jugador+de+Futbol+5",
	},
	{
		firstName: "Diego",
		lastName: "Ramírez",
		number: 5,
		position: "Defensor",
		img: "https://placehold.co/700x1000/0d2240/00AEEF?text=Jugador+de+Futbol+6",
	},
	{
		firstName: "Carlos",
		lastName: "Méndez",
		number: 11,
		position: "Delantero",
		img: "https://placehold.co/700x1000/0d2240/00AEEF?text=Jugador+de+Futbol+7",
	},
];

export function InferioresSection() {
	const [startIndex, setStartIndex] = useState(0);
	const [visibleCount, setVisibleCount] = useState(5);

	useEffect(() => {
		const syncVisibleCount = () => {
			const width = window.innerWidth;
			if (width < 768) {
				setVisibleCount(1);
				return;
			}
			if (width < 1024) {
				setVisibleCount(2);
				return;
			}
			setVisibleCount(5);
		};

		syncVisibleCount();
		window.addEventListener("resize", syncVisibleCount);
		return () => window.removeEventListener("resize", syncVisibleCount);
	}, []);

	const maxStart = Math.max(0, players.length - visibleCount);
	const currentIndex = Math.min(startIndex, maxStart);
	const canPrev = currentIndex > 0;
	const canNext = currentIndex + visibleCount < players.length;

	const prev = () => canPrev && setStartIndex((i) => Math.max(0, i - 1));
	const next = () => canNext && setStartIndex((i) => Math.min(maxStart, i + 1));

	const visible = players.slice(currentIndex, currentIndex + visibleCount);

	return (
		<section
			id="inferiores"
			aria-labelledby="plantel-title"
			className="relative overflow-hidden py-20"
		>
			<div className="pointer-events-none absolute inset-0" aria-hidden>
				<Image
					src="/plantel.png"
					alt=""
					fill
					className="object-cover"
					priority={false}
				/>
			</div>
			<div
				className="pointer-events-none absolute inset-0 bg-[rgba(8,22,46,0.62)]"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute -left-10 top-0 h-40 w-72 rotate-[-8deg] opacity-25"
				style={{
					background: "url('/brush-blue.png') center/cover no-repeat",
				}}
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute -right-10 top-0 h-36 w-64 rotate-[6deg] opacity-20"
				style={{
					background: "url('/brush-blue.png') center/cover no-repeat",
				}}
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06] md:-left-16 md:h-[400px] md:w-[400px] md:translate-x-0"
				aria-hidden
			>
				<Image src="/logo-oficial.png" alt="" fill className="object-contain" />
			</div>
			<div
				className="pointer-events-none absolute -right-16 top-1/2 hidden h-[380px] w-[380px] -translate-y-1/2 opacity-[0.06] md:block"
				aria-hidden
			>
				<Image src="/logo-oficial.png" alt="" fill className="object-contain" />
			</div>

			<div className="relative z-10 mx-auto max-w-[1300px] px-6 sm:px-10 lg:px-16 xl:px-20">
				<div className="mb-12 text-center">
					<p className="font-heading mb-2 text-[0.72rem] font-bold uppercase tracking-[0.26em] text-[#00AEEF]">
						Plantel Profesional
					</p>
					<h2
						id="plantel-title"
						className="font-display text-[clamp(2.8rem,6vw,5rem)] font-black uppercase leading-[0.92] text-white"
					>
						Argentino <span className="text-[#00AEEF]">de Merlo</span>
					</h2>
					<div className="mx-auto mb-5 mt-4 h-[3px] w-12 rounded-full bg-[#00c0f0]" />
					<p className="text-[1rem] font-medium text-[#d4e2f3]">
						Un equipo, una pasión. Representamos a todo Merlo.
					</p>
				</div>

				<div className="relative flex items-center gap-4">
					<div
						className="grid flex-1 gap-4"
						style={{ gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))` }}
					>
						{visible.map((player, i) => (
							<PlayerCard key={player.lastName + currentIndex + i} player={player} />
						))}
					</div>
				</div>

				<div className="mt-8 flex items-center justify-center gap-3">
					<button
						onClick={prev}
						disabled={!canPrev}
						aria-label="Jugador anterior"
						className="flex h-8 w-8 items-center justify-center rounded-full text-celeste transition hover:bg-celeste/15 disabled:cursor-not-allowed disabled:opacity-30"
					>
						<FiChevronLeft className="h-5 w-5" />
					</button>
					{Array.from({ length: players.length - visibleCount + 1 }).map((_, i) => (
						<button
							key={i}
							onClick={() => setStartIndex(i)}
							aria-label={`Ir a página ${i + 1}`}
							className={`h-2 rounded-full transition-all ${
								i === currentIndex
									? "w-6 bg-[#00AEEF]"
									: "w-2 bg-[#00AEEF]/30 hover:bg-[#00AEEF]/60"
							}`}
						/>
					))}
					<button
						onClick={next}
						disabled={!canNext}
						aria-label="Jugador siguiente"
						className="flex h-8 w-8 items-center justify-center rounded-full text-celeste transition hover:bg-celeste/15 disabled:cursor-not-allowed disabled:opacity-30"
					>
						<FiChevronRight className="h-5 w-5" />
					</button>
				</div>
			</div>
		</section>
	);
}

function PlayerCard({ player }: { player: (typeof players)[0] }) {
	return (
		<article className="group relative overflow-hidden rounded-md bg-[#0f2e53] shadow-[0_10px_30px_rgba(4,20,43,0.35)] transition-transform duration-300 hover:-translate-y-1">
			<div className="relative h-[290px] w-full overflow-hidden">
				<Image
					src={player.img}
					alt={`${player.firstName} ${player.lastName}`}
					fill
					className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
					sizes="(max-width: 1300px) 20vw, 240px"
				/>
				<div
					className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,rgba(6,19,39,0.65),transparent)]"
					aria-hidden
				/>
			</div>

			<div className="grid grid-cols-[1fr_74px] items-stretch">
				<div className="bg-celeste px-3 py-2.5">
					<p className="font-heading text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white/90">
						{player.firstName}
					</p>
					<p className="font-display text-[2rem] font-black uppercase leading-[0.86] text-white">
						{player.lastName}
					</p>
				</div>
				<div className="flex items-center justify-center bg-[#082039]">
					<span className="font-display text-[2.7rem] font-black leading-none text-celeste">
						{player.number}
					</span>
				</div>
			</div>
		</article>
	);
}

export type NewsItem = {
	id: string;
	title: string;
	category: string;
	dateLabel: string;
	imageSrc: string;
	imageAlt: string;
	featured?: boolean;
};

export type MatchItem = {
	id: string;
	day: string;
	month: string;
	home: string;
	away: string;
	competition: string;
	venue: "local" | "visitante";
};

export type PlayerItem = {
	id: string;
	number: string;
	position: string;
	name: string;
	imageSrc: string;
	imageAlt: string;
};

export type ProductItem = {
	id: string;
	icon: string;
	name: string;
	price: string;
};

export const newsItems: NewsItem[] = [
	{
		id: "n1",
		category: "Primera División",
		title: "Victoria agónica en el clásico del Oeste: Argentino 2 – 1 Deportivo",
		dateLabel: "20 de abril de 2026",
		imageSrc:
			"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
		imageAlt: "Jugadores festejando una victoria en el estadio",
		featured: true,
	},
	{
		id: "n2",
		category: "Inferiores",
		title: "La Séptima clasificó a semifinales del Torneo Clausura AFA",
		dateLabel: "18 de abril de 2026",
		imageSrc:
			"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",
		imageAlt: "Pelota en juego durante un partido de inferiores",
	},
	{
		id: "n3",
		category: "Institución",
		title: "Renovación del estadio: arranca la segunda etapa de obra en las tribunas",
		dateLabel: "15 de abril de 2026",
		imageSrc:
			"https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80",
		imageAlt: "Vista del estadio en obras",
	},
];

export const matchItems: MatchItem[] = [
	{
		id: "m1",
		day: "26",
		month: "ABR",
		home: "Argentino Merlo",
		away: "Dep. Merlo",
		competition: "Clausura · Fecha 10",
		venue: "local",
	},
	{
		id: "m2",
		day: "03",
		month: "MAY",
		home: "All Boys",
		away: "Argentino Merlo",
		competition: "Clausura · Fecha 11",
		venue: "visitante",
	},
	{
		id: "m3",
		day: "10",
		month: "MAY",
		home: "Argentino Merlo",
		away: "San Martín (M)",
		competition: "Clausura · Fecha 12",
		venue: "local",
	},
	{
		id: "m4",
		day: "17",
		month: "MAY",
		home: "Liniers",
		away: "Argentino Merlo",
		competition: "Clausura · Fecha 13",
		venue: "visitante",
	},
	{
		id: "m5",
		day: "24",
		month: "MAY",
		home: "Argentino Merlo",
		away: "Lugano",
		competition: "Clausura · Fecha 14",
		venue: "local",
	},
	{
		id: "m6",
		day: "31",
		month: "MAY",
		home: "Claypole",
		away: "Argentino Merlo",
		competition: "Clausura · Fecha 15",
		venue: "visitante",
	},
];

export const playerItems: PlayerItem[] = [
	{
		id: "p1",
		number: "1",
		position: "Arquero",
		name: "Rodrigo Gómez",
		imageSrc: "https://placehold.co/700x1000/0d2240/00AEEF?text=Jugador+de+Futbol+1",
		imageAlt: "Jugador de fútbol 1",
	},
	{
		id: "p2",
		number: "4",
		position: "Defensor",
		name: "Lucas Peralta",
		imageSrc: "https://placehold.co/700x1000/0d2240/00AEEF?text=Jugador+de+Futbol+2",
		imageAlt: "Jugador de fútbol 2",
	},
	{
		id: "p3",
		number: "5",
		position: "Defensor",
		name: "Maximiliano Ríos",
		imageSrc: "https://placehold.co/700x1000/0d2240/00AEEF?text=Jugador+de+Futbol+3",
		imageAlt: "Jugador de fútbol 3",
	},
	{
		id: "p4",
		number: "8",
		position: "Mediocampista",
		name: "Ezequiel Torres",
		imageSrc: "https://placehold.co/700x1000/0d2240/00AEEF?text=Jugador+de+Futbol+4",
		imageAlt: "Jugador de fútbol 4",
	},
	{
		id: "p5",
		number: "10",
		position: "Mediocampista",
		name: "Nicolás Vera",
		imageSrc: "https://placehold.co/700x1000/0d2240/00AEEF?text=Jugador+de+Futbol+5",
		imageAlt: "Jugador de fútbol 5",
	},
	{
		id: "p6",
		number: "7",
		position: "Delantero",
		name: "Facundo López",
		imageSrc: "https://placehold.co/700x1000/0d2240/00AEEF?text=Jugador+de+Futbol+6",
		imageAlt: "Jugador de fútbol 6",
	},
	{
		id: "p7",
		number: "9",
		position: "Delantero",
		name: "Agustín Morel",
		imageSrc: "https://placehold.co/700x1000/0d2240/00AEEF?text=Jugador+de+Futbol+7",
		imageAlt: "Jugador de fútbol 7",
	},
	{
		id: "p8",
		number: "3",
		position: "Defensor",
		name: "Braian Suárez",
		imageSrc: "https://placehold.co/700x1000/0d2240/00AEEF?text=Jugador+de+Futbol+8",
		imageAlt: "Jugador de fútbol 8",
	},
	{
		id: "p9",
		number: "6",
		position: "Defensor",
		name: "Diego Almada",
		imageSrc: "https://placehold.co/700x1000/0d2240/00AEEF?text=Jugador+de+Futbol+9",
		imageAlt: "Jugador de fútbol 9",
	},
	{
		id: "p10",
		number: "11",
		position: "Delantero",
		name: "Sebastián Núñez",
		imageSrc: "https://placehold.co/700x1000/0d2240/00AEEF?text=Jugador+de+Futbol+10",
		imageAlt: "Jugador de fútbol 10",
	},
];

export const productItems: ProductItem[] = [
	{ id: "pr1", icon: "👕", name: "Camiseta Titular", price: "$18.500" },
	{ id: "pr2", icon: "🧥", name: "Campera Oficial", price: "$24.000" },
	{ id: "pr3", icon: "🩳", name: "Short de Juego", price: "$9.500" },
	{ id: "pr4", icon: "🧢", name: "Gorra Celeste", price: "$6.800" },
];

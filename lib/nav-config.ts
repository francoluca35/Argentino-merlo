export type NavLeaf = {
	type: "link";
	label: string;
	href: string;
	scrollId: string;
};

export type DropdownItem = {
	label: string;
	href: string;
	scrollId: string;
};

export type NavDropdown = {
	type: "dropdown";
	key: string;
	label: string;
	items: DropdownItem[];
};

export type LeftNavEntry = NavLeaf | NavDropdown;

export const NAV_LEFT: LeftNavEntry[] = [
	{ type: "link", label: "Club", href: "#club", scrollId: "club" },
	{
		type: "dropdown",
		key: "futbol",
		label: "Fútbol",
		items: [
			{ label: "Primera", href: "#plantel", scrollId: "plantel" },
			{ label: "Inferiores", href: "#inferiores", scrollId: "inferiores" },
			{ label: "Infantiles", href: "#infantiles", scrollId: "infantiles" },
			{ label: "Femenino", href: "#femenino", scrollId: "femenino" },
		],
	},
	{
		type: "dropdown",
		key: "actividades",
		label: "Actividades",
		items: [
			{ label: "Baby Fútbol", href: "#baby-futbol", scrollId: "baby-futbol" },
			{ label: "Natación", href: "#natacion", scrollId: "natacion" },
		],
	},
];

export type RightNavItem = {
	label: string;
	href: string;
	scrollId: string;
	variant?: "cta";
};

export const NAV_RIGHT: RightNavItem[] = [
	{ label: "Calendario", href: "#calendario", scrollId: "calendario" },
	{ label: "Tienda", href: "#tienda", scrollId: "tienda" },
	{ label: "Entradas", href: "#tienda", scrollId: "tienda", variant: "cta" },
];

/** Secciones con id en el documento (orden = orden vertical en la página). */
export const SECTION_IDS = [
	"inicio",
	"club",
	"noticias",
	"inferiores",
	"calendario",
	"plantel",
	"tienda",
	"infantiles",
	"femenino",
	"baby-futbol",
	"natacion",
] as const satisfies readonly string[];

import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-bebas",
	display: "swap",
});

const barlowCondensed = Barlow_Condensed({
	weight: ["400", "600", "700", "900"],
	subsets: ["latin"],
	variable: "--font-barlow-condensed",
	display: "swap",
});

const barlow = Barlow({
	weight: ["400", "500", "600"],
	subsets: ["latin"],
	variable: "--font-barlow",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Club Atlético Argentino de Merlo",
	description:
		"Pasión, identidad y territorio. Club Atlético Argentino de Merlo — Merlo Norte, Buenos Aires. Afiliado a AFA.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="es"
			className={`${bebasNeue.variable} ${barlowCondensed.variable} ${barlow.variable} h-full antialiased`}
		>
			<body className="min-h-full font-body">{children}</body>
		</html>
	);
}

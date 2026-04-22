import type { SVGProps } from "react";

export function CrestNav(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 80 90"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden
			{...props}
		>
			<path
				d="M40 4L8 18V50C8 68 40 86 40 86C40 86 72 68 72 50V18L40 4Z"
				fill="white"
				stroke="#00AEEF"
				strokeWidth={2}
			/>
			<path d="M40 4L8 18V50C8 68 40 86 40 86V4Z" fill="#00AEEF" />
			<path d="M40 4V86C40 86 72 68 72 50V18L40 4Z" fill="white" />
			<rect x={28} y={20} width={5} height={46} fill="#00AEEF" opacity={0.6} />
			<rect x={37} y={20} width={5} height={46} fill="#00AEEF" opacity={0.6} />
			<rect x={46} y={20} width={5} height={46} fill="#00AEEF" opacity={0.6} />
			<text
				x={40}
				y={72}
				fontFamily="Arial"
				fontSize={7}
				fontWeight="bold"
				fill="#00AEEF"
				textAnchor="middle"
			>
				A.C.A.
			</text>
			<text x={30} y={14} fontSize={6} fill="#F5C518">
				★
			</text>
			<text x={37} y={12} fontSize={6} fill="#F5C518">
				★
			</text>
			<text x={44} y={14} fontSize={6} fill="#F5C518">
				★
			</text>
		</svg>
	);
}

export function CrestHero(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 160 180"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden
			{...props}
		>
			<path
				d="M80 6L10 32V96C10 138 80 174 80 174C80 174 150 138 150 96V32L80 6Z"
				fill="white"
				stroke="#00AEEF"
				strokeWidth={3}
			/>
			<path d="M80 6L10 32V96C10 138 80 174 80 174V6Z" fill="#00AEEF" />
			<path d="M80 6V174C80 174 150 138 150 96V32L80 6Z" fill="white" />
			<rect x={52} y={38} width={9} height={98} fill="#00AEEF" opacity={0.55} />
			<rect x={67} y={38} width={9} height={98} fill="#00AEEF" opacity={0.55} />
			<rect x={82} y={38} width={9} height={98} fill="#00AEEF" opacity={0.55} />
			<rect x={97} y={38} width={9} height={98} fill="#00AEEF" opacity={0.55} />
			<circle cx={80} cy={90} r={36} stroke="white" strokeWidth={2} fill="none" />
			<text
				x={80}
				y={84}
				fontFamily="Arial Black"
				fontSize={10}
				fontWeight={900}
				fill="white"
				textAnchor="middle"
			>
				CLUB ATLÉTICO
			</text>
			<text
				x={80}
				y={96}
				fontFamily="Arial Black"
				fontSize={14}
				fontWeight={900}
				fill="#00AEEF"
				textAnchor="middle"
			>
				A.C.A.
			</text>
			<text
				x={80}
				y={110}
				fontFamily="Arial Black"
				fontSize={10}
				fontWeight={900}
				fill="white"
				textAnchor="middle"
			>
				MERLO
			</text>
			<text x={56} y={26} fontSize={12} fill="#F5C518">
				★
			</text>
			<text x={71} y={21} fontSize={12} fill="#F5C518">
				★
			</text>
			<text x={86} y={21} fontSize={12} fill="#F5C518">
				★
			</text>
			<text x={100} y={26} fontSize={12} fill="#F5C518">
				★
			</text>
		</svg>
	);
}

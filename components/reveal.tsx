"use client";

import {
	useEffect,
	useRef,
	useState,
	type HTMLAttributes,
	type ReactNode,
} from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
	children: ReactNode;
};

export function Reveal({ children, className = "", ...rest }: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry?.isIntersecting) setVisible(true);
			},
			{ threshold: 0.12 },
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`transition-[opacity,transform] duration-700 ease-out ${
				visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
			} ${className}`}
			{...rest}
		>
			{children}
		</div>
	);
}

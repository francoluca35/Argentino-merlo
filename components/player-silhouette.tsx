export function PlayerSilhouette({ className = "" }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 60 80"
			fill="none"
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden
		>
			<ellipse cx={30} cy={22} rx={14} ry={14} fill="rgba(0,174,239,0.4)" />
			<path d="M8 70 C8 50 52 50 52 70" fill="rgba(0,174,239,0.3)" />
		</svg>
	);
}

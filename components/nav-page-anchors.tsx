/**
 * Destinos de ancla para ítems del menú que aún no tienen bloque de contenido propio.
 * scroll-mt alineado con el resto de secciones.
 */
export function NavPageAnchors() {
	const ids = ["infantiles", "femenino", "baby-futbol", "natacion"] as const;

	return (
		<>
			{ids.map((id) => (
				<div
					key={id}
					id={id}
					className="h-0 scroll-mt-[120px]"
					tabIndex={-1}
					aria-hidden
				/>
			))}
		</>
	);
}

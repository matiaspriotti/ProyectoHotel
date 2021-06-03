import './tarjeta.css'

export function Tarjeta({
	titulo,
	fotos,
	descripcion,
	ubicacion,
	pais,
	precios,
	habitaciones,
}) {
	return (
		<div className='componenteTarjeta'>
			<div>
				<img className='imagenPrincipal' src={fotos} alt='' />
				<div className='contenedor-general'>
					<div className='contenedor-tituloydescripcion'>
						<h1 className='titulo'>{titulo}</h1>
						<p className='descripcion'>{descripcion}</p>
					</div>
					<div className='iconoytexto'>
						<i className='fas fa-map-marker-alt'></i>
						<p className='texto'>
							{ubicacion}, {pais}
						</p>
					</div>
					<div className='iconoytexto'>
						<i className='room-bed fas fa-bed'></i>
						<p className='texto'>{habitaciones} habitaciones</p>
						<i className=' room-price fas fa-dollar-sign'></i>
						<p className='precio'>{precios}</p>
					</div>
					<button className='boton'>Reservar</button>
				</div>
			</div>
		</div>
	)
}

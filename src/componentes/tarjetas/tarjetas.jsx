import { Tarjeta } from '../tarjeta/tarjeta'
import './tarjetas.css'

export function Tarjetas(props) {
	return (
		<div className='contenedor-de-tarjetas'>
			{props.data.map((tarjeta) => (
				<div key={tarjeta.slug}>
					<Tarjeta
						titulo={tarjeta.name}
						fotos={tarjeta.photo}
						descripcion={tarjeta.description}
						ubicacion={tarjeta.city}
						pais={tarjeta.country}
						precios={tarjeta.price}
						habitaciones={tarjeta.rooms}
					/>
				</div>
			))}
		</div>
	)
}

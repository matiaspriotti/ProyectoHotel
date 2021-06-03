import './header.css'
import hotellogo from './hotellogo.svg'

export function Header(props) {
	return (
		<header className='fondoTituloHoteles'>
			<div className='contenedorTituloYdescripcion'>
				<h1 className='tituloHoteles'>Hoteles</h1>
				<p className='descripcionFecha'>
					Desde el, {props.dateFrom}, hasta el {props.dateTo} en {props.paises}{' '}
					a un precio {props.precio} y tamaño: {props.habitaciones}
				</p>
			</div>
			<div className='divlogo'>
				<img src={hotellogo} className='App-logos' alt='logo' />
			</div>
		</header>
	)
}

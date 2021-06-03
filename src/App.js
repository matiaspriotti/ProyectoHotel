import './App.css'
import React, { useEffect, useState } from 'react'
import { Header } from './componentes/header/header'
import { Tarjetas } from './componentes/tarjetas/tarjetas'
import { Filtros } from './componentes/filtros/filtros'
import { hotelsData } from './data/data'
import {
	filterByCountry,
	filterByDate,
	filterByPrice,
	filterByRooms,
} from './utils/filters'

function App() {
	const [dateFrom, setDateFrom] = useState('')
	const [dateTo, setDateTo] = useState('')
	const [paises, setPaises] = useState('todos los paises')
	const [precios, setPrecios] = useState('cualquier')
	const [habitaciones, setHabitaciones] = useState('cualquier')
	const [hoteles, setHoteles] = useState(hotelsData)

	const handlerReset = (e) => {
		setDateFrom('')
		setDateTo('')
		setPaises('todos los paises')
		setPrecios('cualquier')
		setHabitaciones('cualquier')
	}
	const handlerDateFrom = (e) => {
		setDateFrom(e.target.value)
	}

	const handlerDateTo = (e) => {
		setDateTo(e.target.value)
	}

	const cambiarPaises = (e) => {
		let paises = e.target.value
		setPaises(paises)
	}

	const cambiarPrecios = (e) => {
		let precios = e.target.value
		setPrecios(precios)
	}

	const cambiarHabitaciones = (e) => {
		let habitaciones = e.target.value
		setHabitaciones(habitaciones)
	}

	const filtrarHoteles = () => {
		const newHoteles = hotelsData.filter(
			(hotel) =>
				filterByDate(
					hotel.availabilityFrom,
					hotel.availabilityTo,
					dateFrom,
					dateTo
				) &&
				filterByCountry(hotel.country, paises) &&
				filterByPrice(hotel.price, precios) &&
				filterByRooms(hotel.rooms, habitaciones)
		)
		setHoteles(newHoteles)
	}

	useEffect(filtrarHoteles, [dateFrom, dateTo, paises, precios, habitaciones])

	return (
		<main className='App'>
			<Header
				dateFrom={dateFrom}
				dateTo={dateTo}
				paises={paises}
				precios={precios}
				habitaciones={habitaciones}
			/>
			<Filtros
				dateFrom={[dateFrom, handlerDateFrom]}
				dateTo={[dateTo, handlerDateTo]}
				paises={[paises, cambiarPaises]}
				precios={[precios, cambiarPrecios]}
				habitaciones={[habitaciones, cambiarHabitaciones]}
				handlerReset={handlerReset}
			/>
			<Tarjetas data={hoteles} />
		</main>
	)
}

export default App

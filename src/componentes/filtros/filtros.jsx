export const Filtros = (props) => {
	return (
		<div className='contenedorBusqueda'>
			<div className='iconoConInput'>
				<i className='fas fa-sign-in-alt'></i>
				<label></label>
				<input
					className='inputs'
					type='date'
					onChange={props.dateFrom[1]}
					value={props.dateFrom[0]}
				/>
			</div>

			<div className='iconoConInput'>
				<i className='fas fa-sign-out-alt'></i>
				<label></label>
				<input
					className='inputs'
					type='date'
					onChange={props.dateTo[1]}
					value={props.dateTo[0]}
				/>
			</div>

			<div className='iconoConInput'>
				<i className='fas fa-globe'></i>
				<label htmlFor='paises'></label>
				<select
					className='inputs'
					value={props.paises[0]}
					onChange={props.paises[1]}
				>
					<option value='todos los paises'>Todos los países</option>
					<option value='Argentina'>Argentina</option>
					<option value='Brasil'>Brasil</option>
					<option value='Chile'>Chile</option>
					<option value='Uruguay'>Uruguay</option>
				</select>
			</div>

			<div className='iconoConInput'>
				<i className='fas fa-dollar-sign'></i>
				<label htmlFor='precios'></label>
				<select
					className='inputs'
					onChange={props.precios[1]}
					value={props.precios[0]}
				>
					<option value='cualquier'>Cualquier precio</option>
					<option value='1'>$</option>
					<option value='2'>$$</option>
					<option value='3'>$$$</option>
					<option value='4'>$$$$</option>
				</select>
			</div>

			<div className='iconoConInput'>
				<i className='fas fa-bed'></i>
				<label htmlFor='tamano'></label>
				<select
					className='inputs'
					value={props.habitaciones[0]}
					onChange={props.habitaciones[1]}
				>
					<option value='cualquier'>Cualquier tamaño</option>
					<option value='chico'>Hotel pequeño</option>
					<option value='mediano'>Hotel mediano</option>
					<option value='grande'>Hotel grande</option>
				</select>
			</div>
			<button type='reset' onClick={props.handlerReset}>
				Reset
			</button>
		</div>
	)
}

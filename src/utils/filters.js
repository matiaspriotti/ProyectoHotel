const dateNewFormatString = (date) => {
	let fecha = new Date(date)
	let fechaString = new Date(
		fecha.getFullYear() +
			'-' +
			(fecha.getMonth() + 1) +
			'-' +
			fecha.getDate() +
			' 00:00:00'
	)
	return fechaString
}

export const filterByDate = (hotelFrom, hotelTo, userDateFrom, userDateTo) => {
	if (userDateFrom === '' || userDateTo === '') {
		return true
	} else {
		let hotelDateFromByUnix = dateNewFormatString(hotelFrom).valueOf()
		let hotelDateToByUnix = dateNewFormatString(hotelTo).valueOf()
		let userDateFromByUnix = new Date(userDateFrom + ' 00:00:00')
		let userDateToByUnix = new Date(userDateTo + ' 00:00:00')

		return (
			hotelDateFromByUnix <= userDateFromByUnix &&
			hotelDateToByUnix >= userDateFromByUnix &&
			hotelDateFromByUnix <= userDateToByUnix &&
			hotelDateToByUnix >= userDateToByUnix
		)
	}
}

export const filterByCountry = (hotelCountry, userCountry) => {
	if (userCountry === 'todos los paises') {
		return true
	} else {
		return hotelCountry === userCountry
	}
}

export const filterByPrice = (hotelPrice, userPrice) => {
	if (userPrice === 'cualquier') {
		return true
	} else {
		return hotelPrice == userPrice
	}
}

export const filterByRooms = (hotelRooms, userRooms) => {
	if (userRooms === 'cualquier') {
		return true
	} else {
		return hotelRooms === userRooms
	}
}

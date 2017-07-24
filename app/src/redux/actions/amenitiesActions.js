import fetch from 'isomorphic-fetch';


//////////////////////////////////////////////////acciones para las amenities
export const GET_BOOKINGS = 'GET_BOOKINGS';

export function getBookings(bookings) {
	return {
		type: GET_BOOKINGS
	};
}

//envia la reserva de la amenitie y devuelve todas las reservas + la que cree
export function fetchSendBooking(booking) {
	return (dispatch) => {
		dispatch(isFetching(true))
		return fetch('/reservar', {
			headers: { "Content-Type" : "application/JSON" },
			method: "POST",
			credentials: "include",
			body: JSON.stringify(bookings)
		})
			.then(response => response.json())
			.then(function(data) {
				dispatch(isFetching(false))
				data !== false? dispatch(getBookings(data)): dispatch(getBookings('Failed sending booking'))
		})
	};
}

//devuelve todas las reservas
export function fetchGetBookings() {
	return (dispatch) => {
		dispatch(isFetching(true))
		return fetch('/traer-reservas', {
			headers: { "Content-Type" : "application/JSON" },
			method: "GET",
			credentials: "include",
			body: JSON.stringify(bookings)
		})
			.then(response => response.json())
			.then(function(data) {
				dispatch(isFetching(false))
				data !== false? dispatch(getBookings(data)): dispatch(getBookings('Failed geting bookings'))
		})
	};
}

//envia la reserva a eliminar y devuelve todas las reservas
export function fetchDeleteBooking(booking) {
	return (dispatch) => {
		dispatch(isFetching(true))
		return fetch('/elminiar-reserva', {
			headers: { "Content-Type" : "application/JSON" },
			method: "POST",
			credentials: "include",
			body: JSON.stringify(bookings)
		})
			.then(response => response.json())
			.then(function(data) {
				dispatch(isFetching(false))
				data !== false? dispatch(getBookings(data)): dispatch(getBookings('Failed deleting booking'))
		})
	};
}

//envia la reserva editada, pisa la anterior y devuelve todas las reservas
export function fetchEditBooking(booking) {
	return (dispatch) => {
		isFetching(true)
		return fetch('/editar reserva', {
			headers: { "Content-Type" : "application/JSON" },
			method: "POST",
			credentials: "include",
			body: JSON.stringify(user)
		})
			.then(response => response.json())
			.then(function(data) {
				dispatch(isFetching(false))
				data !== false? dispatch(getBookings(data)): dispatch(getBookings('Failed editing booking'))
		})
	};
}

//IMPORT PARA EL MEGA CREATOR
import fetch from 'isomorphic-fetch'
export * from './userActions.js'
import * as globals from './globalActions.js'
export * from './globalActions.js'

const krakenCreator = function (route, method, actionSuccess) {
	return function(contentName) {
		return (dispatch) => {
			dispatch(isFetching(true))
			return fetch(`/${route}`, {
				headers: { "Content-Type" : "application/JSON" },
				method: method,
				credentials: "include",
				body: contentName? JSON.stringify(contentName) : undefined
			})
			.then(response => {
				response.statusCode
				response.json()
			})
			.then(data => {
				dispatch(isFetching(false))
				dispatch(globals.actionSuccess(data))
			})
			.catch(err => dispatch(error(err)));
		};
	}
}


//// Amenities
export const fetchSendBooking = krakenCreator('POST', 'reservar-amenitie', 'getBookings')
export const fetchGetBookings = krakenCreator('GET', 'reservas-amenities', 'getBookings')
export const fetchDeleteBooking = krakenCreator('POST', 'eliminar-reserva', 'getBookings')
export const fetchEditBooking = krakenCreator('POST', 'editar-reserva','getBookings')

//// Complaints
export const fetchSendComplaint = krakenCreator('POST', 'crear-reclamo', 'getComplaints')
export const fetchGetComplaints = krakenCreator('GET', 'complaints', 'getComplaints')

//// Comments
export const fetchSendComment = krakenCreator('POST', 'crear-comentario', 'getComments')
export const fetchGetComments = krakenCreator('GET', 'comentarios', 'getComments')
export const fetchDeleteComment = krakenCreator('POST', 'eliminar-comentario', 'getComments')

//// Other
export const fetchGetNews = krakenCreator('POST', 'novedades', 'getNews')
export const fetchGetInfo = krakenCreator('GET', 'datos-utiles', 'getInfo')

//// Expenses

//// Documents

//// Send Payment

//// Util Data

////

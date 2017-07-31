//IMPORT PARA EL MEGA CREATOR
import fetch from 'isomorphic-fetch';
export * from './userActions.js';
import * as globals from './globalActions.js';
export * from './globalActions.js';

const krakenCreator = function (route, method, actionSuccess) {
	return function(contentName, finalRoute) {
		let middleRoute=route;
		if (finalRoute) {
			middleRoute=finalRoute;
		}
		return (dispatch) => {
<<<<<<< HEAD
			dispatch(globals.isFetching(true));
=======
			dispatch(globals.isFetching(true))
>>>>>>> 0575e69ba173e4d5a914e3ba374b3ec360eb7cf3
			return fetch(`/${middleRoute}`, {
				headers: { 'Content-Type' : 'application/JSON' },
				method: method,
				credentials: 'include',
				body: contentName? JSON.stringify(contentName) : undefined
			})
<<<<<<< HEAD
				.then(response => {
					response.statusCode;
					response.json();
				})
				.then(data => {
					dispatch(globals.isFetching(false));
					dispatch(globals.actionSuccess(data));
				})
				.catch(err => dispatch(globals.error(err)));
=======
			.then(response => {
				response.statusCode
				response.json()
			})
			.then(data => {
				dispatch(globals.isFetching(false))
				dispatch(globals.actionSuccess(data))
			})
			.catch(err => dispatch(globals.error(err)));
>>>>>>> 0575e69ba173e4d5a914e3ba374b3ec360eb7cf3
		};
	};
};


//// Amenities
export const fetchSendBooking = krakenCreator('POST', 'reservar-amenities', 'getBookings');
export const fetchGetBookings = krakenCreator('GET', 'reservas-amenities', 'getBookings');
export const fetchDeleteBooking = krakenCreator('POST', 'eliminar-reserva', 'getBookings');
export const fetchEditBooking = krakenCreator('POST', 'editar-reserva','getBookings');

//// Complaints
export const fetchSendComplaint = krakenCreator('POST', 'crear-reclamo', 'getComplaints');
export const fetchGetComplaints = krakenCreator('GET', 'complaints', 'getComplaints');

//// Comments
export const fetchSendComment = krakenCreator('POST', 'crear-comentario', 'getComments');
export const fetchGetComments = krakenCreator('GET', 'comentarios', 'getComments');
export const fetchDeleteComment = krakenCreator('POST', 'eliminar-comentario', 'getComments');

//// Other
export const fetchGetNews = krakenCreator('POST', 'novedades', 'getNews');
export const fetchGetInfo = krakenCreator('GET', 'datos-utiles', 'getInfo');

//// Expenses
export const fetchGetExpenses = krakenCreator('GET', 'expensas', 'getExpenses');

//// Documents
export const fetchGetDocuments = krakenCreator('GET', 'ver-documentos', 'getDocuments');

//// Send Payment
export const fetchSendPayment = krakenCreator('POST', 'notificar-pago', 'sendPayment');

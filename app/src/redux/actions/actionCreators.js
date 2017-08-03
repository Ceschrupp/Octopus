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
			dispatch(globals.isFetching(true));
			return fetch(`/${middleRoute}`, {
				headers: { 'Content-Type' : 'application/JSON' },
				method: method,
				credentials: 'include',
				body: contentName? JSON.stringify(contentName) : undefined
			})
				.then(response => {
					response.statusCode;
					response.json();
				})
				.then(data => {
					dispatch(globals.isFetching(false));
					dispatch(globals.actionSuccess(data));
				})
				.catch(err => dispatch(globals.error(err)));
		};
	};
};


//// Amenities
export const fetchSendBooking = krakenCreator('POST', 'reservar-amenities', 'getBookings');
export const fetchGetBookings = krakenCreator('GET', 'reservas-amenities', 'getBookings');
export const fetchDeleteBooking = krakenCreator('POST', 'eliminar-reserva', 'getBookings');
export const fetchEditBooking = krakenCreator('POST', 'editar-reserva','getBookings');

//// Complaints
export const fetchSendComplaint = krakenCreator('POST', 'crear-reclamo', 'createComplaint');
export const fetchGetComplaints = krakenCreator('GET', 'complaints', 'getComplaints');
export const fetchGetMoreComplaints = krakenCreator('GET', 'complaints', 'getMoreComplaints');

//// Comments
export const fetchSendComment = krakenCreator('POST', 'crear-comentario', 'createComment');
export const fetchDeleteComment = krakenCreator('POST', 'eliminar-comentario', 'deleteComment');
export const fetchEditComment = krakenCreator('POST', 'editar-comentario','editComment');
export const fetchGetComments = krakenCreator('GET', 'comentarios', 'getComments');
export const fetchGetMoreComments = krakenCreator('GET', 'comentarios', 'getMoreComments');

//// Other
export const fetchGetNews = krakenCreator('POST', 'novedades', 'getNews');
export const fetchGetInfo = krakenCreator('GET', 'datos-utiles', 'getInfo');

//// Expenses
export const fetchGetExpenses = krakenCreator('GET', 'expensas', 'getExpenses');

//// Documents
export const fetchGetDocuments = krakenCreator('GET', 'ver-documentos', 'getDocuments');

//// Send Payment
export const fetchSendPayment = krakenCreator('POST', 'notificar-pago', 'sendPayment');

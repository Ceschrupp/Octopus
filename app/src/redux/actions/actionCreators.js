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
export const fetchGetBookings = krakenCreator('GET', 'ver-reservas', 'getBookings');
export const fetchGetMoreBookings = krakenCreator('GET', 'ver-reservas', 'getMoreBookings');
export const fetchCreateBooking = krakenCreator('POST', 'reservar-amenities', 'createBooking');
export const fetchDeleteBooking = krakenCreator('POST', 'eliminar-reserva','deleteBooking');
export const fetchEditBooking = krakenCreator('POST', 'editar-reserva','editBooking');

//// Complaints
export const fetchSendComplaint = krakenCreator('POST', 'crear-reclamo', 'getComplaints');
export const fetchGetComplaints = krakenCreator('GET', 'complaints', 'getComplaints');

//// Comments
export const fetchSendComment = krakenCreator('POST', 'crear-comentario', 'getComments');
export const fetchGetComments = krakenCreator('GET', 'comentarios', 'getComments');
export const fetchDeleteComment = krakenCreator('POST', 'eliminar-comentario', 'getComments');

//// Other
export const fetchGetNews = krakenCreator('GET', 'novedades', 'getNews');
export const fetchGetMoreNews= krakenCreator('GET', 'novedades', 'getMoreNews');

export const fetchGetInfo = krakenCreator('GET', 'datos-utiles', 'getInfo');
export const fetchGetMoreInfo = krakenCreator('GET', 'datos-utiles', 'getMoreInfo');

//// Expenses
export const fetchGetExpenses = krakenCreator('GET', 'expensas', 'getExpenses');
export const fetchGetMoreExpenses = krakenCreator('GET', 'expenses', 'getMoreExpenses');

//// Documents
export const fetchGetDocuments = krakenCreator('GET', 'ver-documentos', 'getDocuments');
export const fetchGetMoreDocuments = krakenCreator('GET', 'ver-documentos', 'getMoreDocuments');

//// Payments
export const fetchPaymentNotice = krakenCreator('POST', 'notificar-pago', 'paymentNotice');
export const fetchGetPayments = krakenCreator('GET', 'ver-pagos', 'getPayments');
export const fetchGetMorePayments = krakenCreator('GET', 'ver-pagos', 'getMorePayments');
//IMPORT PARA EL MEGA CREATOR
import * as globals from './globalActions.js';
export * from './globalActions.js';
import Store from '../store.js';

// :${Store.InitialState.building.building_id}

import * as  $ from 'jquery';
import * as userActions from './userActions.js';
export * from './userActions.js';
const url = 'http://api.octopus.dev/api';
const url1 = 'https://1a721138.ngrok.io'
const ifError = (status, dispatch) => {
	dispatch(globals.failedToFetch(false));
	dispatch(userActions.userFail(false));
	status === '400' || status === '401' ?
		dispatch(userActions.userFail('Error de Autenticación'))
		: status === '500' || status === '404' ?
			dispatch(globals.failedToFetch('Error del servidor'))
			: dispatch(globals.failedToFetch('Error del servidor'));
};



const krakenCreator = function (route, method, actionSuccess) {
	return function(contentName, finalRoute) {
		console.log('Stores', Store.getState());
		let building_id= Store.getState().other.buildingNow;
		let middleRoute=route;
		if (finalRoute) {
			middleRoute=finalRoute;
		}
		return (dispatch) => {
			dispatch(globals.isFetching(true));

			return $.ajax({
				type: method,
				url: `${url1}/${middleRoute}/${building_id}`,
				xhrFields: {
					withCredentials: true
				},
				dataType: 'jsonp',
				data: contentName? JSON.stringify(contentName) : undefined
			})
				.done( res => {
					res.json();
					console.log('SUCCESS:', res);
					dispatch(globals.actionSuccess(res));
				})
				.fail( (jqXHR, textStatus, errorThrown) => {
					console.log('ERROR:',jqXHR.status, ': ',textStatus);
					ifError(jqXHR.status, dispatch);
				})
				.always( f => {
					dispatch(globals.isFetching(false));
				});
		};
	};
};

/*
400 (bad request) : error de validación (mail escrito el email, o algún campo no enviado, p.ej)
401 (unauthorized): email/ pass incorrecto
500 (internal server error): ocurrió un error del lado del server
*/

/*
const krakenCreator = function (route, method, actionSuccess) {
	return function(contentName, finalRoute) {
		let middleRoute=route;
		if (finalRoute) {
			middleRoute=finalRoute;
		}
		return (dispatch) => {
			dispatch(globals.isFetching(true));
			return fetch(`/${middleRoute}`, {
=======
			return fetch(`/api/${middleRoute}/${building_id}`, {
>>>>>>> 694f47ee0b323365867dadb3b0416e8bc2faeab4
>>>>>>> 08ed928178747a512c0aed79b3cd86fd2d3548c7
				headers: { 'Content-Type' : 'application/JSON' },
				method: method,
				credentials: 'include',s
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
};*/


//// Amenities
export const fetchGetBookings = krakenCreator('GET', 'ver-reservas', 'getBookings');
export const fetchGetMoreBookings = krakenCreator('GET', 'ver-reserva', 'getMoreBookings');
export const fetchCreateBooking = krakenCreator('POST', 'reservar-amenities', 'createBooking');
export const fetchDeleteBooking = krakenCreator('DELETE', 'eliminar-reserva','deleteBooking');//cambie por delete
export const fetchEditBooking = krakenCreator('PUT', 'editar-reserva','editBooking'); //cambie por put

//// Complaints
export const fetchSendComplaint = krakenCreator('POST', 'crear-reclamo', 'createComplaint');
export const fetchGetComplaints = krakenCreator('GET', 'reclamos', 'getComplaints');
export const fetchGetMoreComplaints = krakenCreator('GET', 'reclamos', 'getMoreComplaints');

//// Comments
export const fetchSendComment = krakenCreator('POST', 'crear-comentario', 'createComment');
export const fetchDeleteComment = krakenCreator('DELETE', 'eliminar-comentario', 'deleteComment');
export const fetchEditComment = krakenCreator('POST', 'editar-comentario','editComment');
export const fetchGetComments = krakenCreator('GET', 'comentarios', 'getComments');
export const fetchGetMoreComments = krakenCreator('GET', 'comentarios', 'getMoreComments');

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

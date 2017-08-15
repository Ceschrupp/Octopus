//IMPORT PARA EL MEGA CREATOR
import * as userActions from './userActions.js';
import * as globals from './globalActions.js';
export * from './userActions.js';
export * from './globalActions.js';
import Store from '../store.js';
import axios from 'axios';

//URLs
const url = 'http://api.octopus.dev/api';
const url1 = 'https://e0893c1f.ngrok.io';
const localUrl = 'http://localhost:3000';

const ifError = (status, dispatch) => {
	dispatch(globals.failedToFetch(false));
	dispatch(userActions.userFail(false));
	status === '400' || status === '401' ?
		dispatch(userActions.userFail('Error de Autenticación'))
		: status === '500' || status === '404' ?
			dispatch(globals.failedToFetch('Error del servidor'))
			: dispatch(globals.failedToFetch('Error del servidor'));
};

const krakenCreator = function (type, route, actionSuccess) {
	return function(content, finalRoute) {
		let building_id = Store.getState().other.buildingNow;
		let middleRoute = '/' + route;
		if (finalRoute) {
			middleRoute = '/' + finalRoute;
		}
		return (dispatch) => {
			dispatch(globals.isFetching(true));
			console.log('Stores', Store.getState());
			console.log(`${localUrl}${middleRoute}`);
			return axios({
				headers: {
					'Access-Control-Allow-Origin': '*',
				},
				crossDomain: true,
				url: `${localUrl}${middleRoute}`,
				method: type,
				withCredentials: true,
				responseType: 'json',
				data: content? JSON.stringify(content) : null
			})
				.then( res => {
					console.log('RESPONSE.data:', res.data);
					dispatch(globals[actionSuccess](res.data));
					console.log('Stores', Store.getState());
					dispatch(globals.isFetching(false));
				})
				.catch( error => {
					console.log('ERROR:',error);
					ifError(error.response.status, dispatch);
					dispatch(globals.isFetching(false));
				});
		};
	};
};

/*
const krakenCreator = function (method, route, actionSuccess) {
	return function(finalRoute, content) {
		console.log('Stores', Store.getState());
		let building_id = Store.getState().other.buildingNow;
		let middleRoute = '/' + route;
		if (finalRoute) {
			middleRoute = '/' + finalRoute;
		}
		return (dispatch) => {
			dispatch(globals.isFetching(true));
			console.log('Stores', Store.getState());
			console.log(`${url1}${middleRoute}`);
			return $.ajax({
				type: method,
				url: `${url1}${middleRoute}`,
				xhrFields: {
					withCredentials: true
				},
				dataType: 'jsonp',
				data: content? JSON.stringify(content) : null
			})
				.done( res => {
					res.json();
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
};*/


/*
400 (bad request) : error de validación (mail escrito el email, o algún campo no enviado, p.ej)
401 (unauthorized): email/ pass incorrecto
500 (internal server error): ocurrió un error del lado del server
*/
/*const krakenCreator = function (route, method, actionSuccess) {
	return function(content, finalRoute) {
		let middleRoute=route;
		if (finalRoute) {
			middleRoute=finalRoute;
		}
		return (dispatch) => {
			dispatch(globals.isFetching(true));
			return fetch(`/${middleRoute}`, {
			return fetch(`/api/${middleRoute}/${building_id}`, {
				headers: { 'Content-Type' : 'application/JSON' },
				method: method,
				credentials: 'include',s
				body: content? JSON.stringify(content) : undefined
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
export const fetchGetBookings = krakenCreator('get', 'reservas', 'getBookings');
export const fetchGetMoreBookings = krakenCreator('get', 'reservas', 'getMoreBookings');
export const fetchCreateBooking = krakenCreator('post', 'reservar-amenities', 'createBooking');
//export const fetchGetBuilding = krakenCreator('get', 'reservar-amenities', 'createBooking');
export const fetchDeleteBooking = krakenCreator('delete', 'eliminar-reserva','deleteBooking');
export const fetchEditBooking = krakenCreator('put', 'editar-reserva','editBooking');

//// Complaints
export const fetchSendComplaint = krakenCreator('post', 'crear-reclamo', 'createComplaint');
export const fetchGetComplaints = krakenCreator('get', 'reclamos', 'getComplaints');
export const fetchGetMoreComplaints = krakenCreator('get', 'reclamos', 'getMoreComplaints');

//// Comments
export const fetchSendComment = krakenCreator('post', 'crear-comentario', 'createComment');
export const fetchDeleteComment = krakenCreator('delete', 'eliminar-comentario', 'deleteComment');
export const fetchEditComment = krakenCreator('post', 'editar-comentario','editComment');
export const fetchGetComments = krakenCreator('get', 'comentarios', 'getComments');
export const fetchGetMoreComments = krakenCreator('get', 'comentarios', 'getMoreComments');

////////// OTHER
//// Novedades
export const fetchGetNews = krakenCreator('get', 'novedades', 'getNews');
export const fetchGetMoreNews= krakenCreator('get', 'novedades', 'getMoreNews');

//// Info
export const fetchGetInfo = krakenCreator('get', 'datos-utiles', 'getInfo');
export const fetchGetMoreInfo = krakenCreator('get', 'datos-utiles', 'getMoreInfo');

//// Expenses
export const fetchGetExpenses = krakenCreator('get', 'expensas', 'getExpenses');
export const fetchGetMoreExpenses = krakenCreator('get', 'expensas', 'getMoreExpenses');

//// Documents ??? a que se refiere con documents? tendra que ver con Payments?
export const fetchGetDocuments = krakenCreator('get', 'documentos', 'getDocuments');
export const fetchGetMoreDocuments = krakenCreator('get', 'documentos', 'getMoreDocuments');

//// Payments
export const fetchCreatePayment = krakenCreator('post', 'notificar-pago', 'createPayment');
export const fetchGetPayments = krakenCreator('get', 'ver-pagos', 'getPayments');
export const fetchGetMorePayments = krakenCreator('get', 'ver-pagos', 'getMorePayments');
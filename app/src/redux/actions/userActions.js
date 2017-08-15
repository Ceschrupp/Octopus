import { isFetching, failedToFetch } from './globalActions';
import * as  $ from 'jquery';
const url = 'http://api.octopus.dev/api';
const localUrl = 'http://localhost:3000/login';
const url1 = 'https://6c6c8f2a.ngrok.io/login';
import axios from 'axios';
import Store from '../store.js';

//////////////////////////////////////////////////acciones para loguear user
export const USER_LOGOUT = 'USER_LOGOUT';

export function logOut() {
	return {
		type: USER_LOGOUT
	};
}
/////USER OK y FAIL son utilizadas por login Y registro
export const USER_SUCCESS = 'USER_SUCCESS';

export function userSuccess(user) {
	return {
		type: USER_SUCCESS,
		user
	};
}

export const USER_FAIL = 'USER_FAIL';

export function userFail(err) {
	return {
		type: USER_FAIL,
		err
	};
}

const ifError = (status, dispatch) => {
	dispatch(failedToFetch(false));
	dispatch(userFail(false));
	status === '400' || status === '401' ?
		dispatch(userFail('Email y/o password incorrectos'))
		: status === '500' || status === '404' ?
			dispatch(failedToFetch('Error del servidor'))
			: dispatch(failedToFetch('Error del servidor'));
};

export function fetchLogUser(user) {

	return (dispatch) => {
		dispatch(isFetching(true));
		return axios({
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			crossDomain: true,
			url: `${localUrl}`,
			method: 'POST',
			withCredentials: true,
			responseType: 'json',
			data: user
		})
			.then( res => {
				console.log('SUCCESS:', res);
				dispatch(userSuccess(res.data));
				dispatch(failedToFetch(false));
				dispatch(isFetching(false));
				console.log('Stores', Store.getState());
			})
			.catch( error => {
				console.log('ERROR:',error );
				ifError(error, dispatch);
				dispatch(isFetching(false));
			});
	};
}

/*
400 (bad request) : error de validación (mal escrito el email, o algún campo no enviado, p.ej)
401 (unauthorized):ocurrió un error del lado del server email/ pass incorrecto
500 (internal server error): ocurrió un error del lado del server
*/

/*return (dispatch) => {
		dispatch(isFetching(true))
		return fetch(`${url}/authenticate`, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'aplication/json'
			},
			mode: 'no-cors',
			body:JSON.stringify({
				'email': 'hola',
				'pas': 'holas'
			})
		})
			.then(response => {
				response.json()
				console.log(response)
		})
			.then(data => {
				console.log(data)
				dispatch(isFetching(false));
				if (data.error) {
					dispatch(failedToLogin(data.messegeError));
				} else {
					dispatch(loginOK(data));
				}
			})
			.catch(err => dispatch(failedToFetch(err)));
	};
}
*/


export function fetchLogOutUser(user) {

	return (dispatch) => {
		dispatch(isFetching(true));
		return $.ajax({
			type: 'GET',
			url: `${url}/logout`,
			dataType: 'jsonp',
			xhrFields: {
				withCredentials: true
			},
			data: user
		})
			.done( res => {
				res.json();
				console.log(res);
				dispatch(logOut());
			})
			.fail( data => {
				console.log(data);
				dispatch(failedToFetch(data.error));
			})
			.always( f => {
				dispatch(isFetching(false));
			});
	};
}
/*return (dispatch) => {
		dispatch(isFetching(true)) /////////el fetch lo mando con toda esta bola?
		return fetch('/logout', {
			headers: { "Content-Type" : "application/JSON" },
			method: "GET",
			credentials: "include",
			body: JSON.stringify(user)
		})
		.then(response => response.json())
		.then(data => {
			dispatch(isFetching(false))
			dispatch(logOut())
		})
		.catch(err => dispatch(failedToFetch(err)));
	};
}*/


//////////////////////////////////////ENVIAR EMAIL PARA OLVIDE MI CLAVE

export function fetchForgotPass(email) {

	return (dispatch) => {
		dispatch(isFetching(true));
		return $.ajax({
			type: 'POST',
			url: `${url}/olvide-clave`,
			dataType: 'jsonp',
			xhrFields: {
				withCredentials: true
			},
			data: email
		})
			.done( res => {
				res.json();
				console.log(res);
			})
			.fail( data => {
				console.log(data);
				dispatch(failedToFetch(data.error));
			})
			.always( f => {
				dispatch(isFetching(false));
			});
	};
}

/*export function fetchForgotPass(email) {
	return (dispatch) => {
		dispatch(isFetching(true))
		return fetch('/olvide-clave', {
			headers: { "Content-Type" : "application/JSON" },
			method: "POST",
			credentials: "include",
			body: JSON.stringify(user)
		})
		.then(response => response.json())
		.then(data => {
			dispatch(isFetching(false));
		})
	}
};
*/

//////////////////////////////////////ENVIAR NUEVA CLAVE PARA CAMBIAR CLAVE
export function fetchChangePass(newPass) {

	return (dispatch) => {
		dispatch(isFetching(true));
		return $.ajax({
			type: 'GET',
			url: `${url}/reiniciar-clave`,
			dataType: 'jsonp',
			xhrFields: {
				withCredentials: true
			},
			data: newPass
		})
			.done( res => {
				res.json();
				console.log(res);
				dispatch(dispatch(logOut()));
			})
			.fail( data => {
				console.log(data);
				dispatch(userFail(data.messegeError));
			})
			.always( f => {
				dispatch(isFetching(false));
			});
	};
}
/*
export function fetchChangePass(newPass) {
	return (dispatch) => {
		dispatch(isFetching(true))
		return fetch('/reiniciar-clave', {
			headers: { "Content-Type" : "application/JSON" },
			method: "GET",
			credentials: "include",
			body: JSON.stringify(user)
		})
		.then(response => response.json())
		.then(data => {
			dispatch(isFetching(false))
			if (data.error) {
				dispatch(failedToLogin(data.messegeError))
			} else {
				dispatch(dispatch(logOut()))
			}
		})
		.catch(err => dispatch(failedToFetch(err)));
	};
}

*/

///////////////////////////ACCIONES PARA REGISTRARSE

export function fetchRegisterUser(newUser) {

	return (dispatch) => {
		dispatch(isFetching(true));
		return $.ajax({
			type: 'POST',
			url: `${url}/registro`,
			dataType: 'jsonp',
			xhrFields: {
				withCredentials: true
			},
			data: newUser
		})
			.done( res => {
				res.json();
				console.log(res);
				dispatch(userSuccess(data));
			})
			.fail( data => {
				console.log(data);
				dispatch(failedToLogin(data.messegeError));
			})
			.always( f => {
				dispatch(userFail(err));
			});
	};
}

/*export function fetchRegisterUser(newUser) {
	return (dispatch) => {
		dispatch(isFetching(true))
		return fetch ('/registro', {
			headers:{"Content-Type":"application/JSON"},
			method: "POST",
			credentials: "include",
			body: JSON.stringify(user)
		})
			.then(response => response.json())
			.then(data => {
				dispatch(isFetching(false))
				if (data.error) {
					dispatch(failedToRegister(data.errorMessage))
				} else {
					dispatch(userSuccess(data));
				}
			})
			.catch(err => dispatch(userFail(err)));
	};
}*/

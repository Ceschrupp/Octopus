import fetch from 'isomorphic-fetch';
import { isFetching, failedToFetch } from './globalActions';

//////////////////////////////////////////////////acciones para loguear user
export const LOG_OUT = 'LOG_OUT';

export function logOut() {
	return {
		type: LOG_OUT
	};
}

export const LOGIN_OK = 'LOGIN_OK';

export function loginOK(user) {
	return {
		type: LOGIN_OK,
		user
	};
}

export const FAILED_TO_LOGIN = 'FAILED_TO_LOGIN';

export function failedToLogin(err) {
	return {
		type: FAILED_TO_LOGIN,
		err
	};
}

export function fetchLogUser(user) {
	return (dispatch) => {
		dispatch(isFetching(true))
		return fetch('/login', {
			headers: { "Content-Type" : "application/JSON" },
			method: "POST",
			credentials: "include",
			body: JSON.stringify(user)
		})
		.then(response => response.json())
		.then(data => {
			dispatch(isFetching(false))
			if (data.error) {
				dispatch(failedToLogin(data.messegeError))
			} else {
				dispatch(loginOK(data))
			}
		})
			.catch(err => dispatch(failedToFetch(err)));
	};
}

//////////////////ver las rutas y acciones posteriormente recibidas por sebas
export function fetchLogOutUser(user) {
	return (dispatch) => {
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
}

//////////////////////////////////////ENVIAR EMAIL PARA OLVIDE MI CLAVE
export function fetchForgotPass(email) {
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


//////////////////////////////////////ENVIAR NUEVA CLAVE PARA CAMBIAR CLAVE
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

///////////////////////////HACER ACCIONES PARA REGISTRARSE

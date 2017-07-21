import fetch from 'isomorphic-fetch';


//////////////////////////////////////////////////acciones para loguear user
export const LOG_USER = 'LOG_USER';

export function logUser() {
	return {
		type: LOG_USER
	};
}

export const LOG_OUT = 'LOG_OUT';

export function logOut() {
	return {
		type: LOG_OUT
	};
}

export const LOGIN_OK = 'LOGIN_OK';

export function loginOK(user) {
	return {
		type: LOGIN_OK
	};
}

export const FAILED_TO_LOGIN = 'FAILED_TO_LOGIN';

export function failedToLogin() {
	return {
		type: FAILED_TO_LOGIN
	};
}

export function fetchLogUser(user) {
	return (dispatch) => {
		dispatch(logUser()); /////////el fetch lo mando con toda esta bola?
		return fetch('./api/login', {
			headers: { "Content-Type" : "application/JSON" },
			method: "POST",
			credentials: "include",
			body: JSON.stringify(user)
		})
			.then(response => response.json())
			.then(data => data !== false? dispatch(loginOK(data)) : dispatch(failedToLogin()));
	};
}

//////////////////ver las rutas y acciones posteriormente recibidas por sebas
export function fetchLogOutUser(user) {
	return (dispatch) => {
		dispatch(logOut()); /////////el fetch lo mando con toda esta bola?
		return fetch('./api/logOut', {
			headers: { "Content-Type" : "application/JSON" },
			method: "GET",
			credentials: "include",
			body: JSON.stringify(user)
		})
			.then(response => response.json())
			.then(data => data !== false? dispatch(loginOK(data)) : dispatch(failedToLogin()));
	};
}
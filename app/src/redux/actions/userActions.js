import fetch from 'isomorphic-fetch';
import { isFetching, failedToFetch } from './globalActions';

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

///////////////////////////ACCIONES PARA REGISTRARSE
export function fetchRegisterUser(newUser) {
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
				dispatch(dispatch(userSuccess(data)));
			}
		})
			.catch(err => dispatch(userFail(err)));
	};
}
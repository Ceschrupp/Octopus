import fetch from 'isomorphic-fetch';
import { isFetching, failedToFetch } from './otherActions';

//////////////////////////////////////////////////acciones para los comments
export const GET_COMMENTS = 'GET_COMMENTS';

export function getComments(comments) {
	return {
		type: GET_COMMENTS,
		comments
	};
}

//envia el comentario creado y devuelve todos los comentarios + el que creé
export function fetchSendComment(comments) {
	return (dispatch) => {
		dispatch(isFetching(true))
		return fetch('/crearComentario', {
			headers: { "Content-Type" : "application/JSON" },
			method: "POST",
			credentials: "include",
			body: JSON.stringify(comments)
		})
		.then(response => response.json())
		.then(data => {
			dispatch(isFetching(false))
			dispatch(getComments(data))
		})
		.catch(err => dispatch(getComments('Failed sending comments')));
	};
}

//devuelve todos los comentarios
export function fetchGetComments(complaint_id) {
	return (dispatch) => {
		dispatch(isFetching(true))
		return fetch('/traerComentarios', {
			headers: { "Content-Type" : "application/JSON" },
			method: "GET",
			credentials: "include",
			body: JSON.stringify(comments)
		})
		.then(response => response.json())
		.then(data => {
			dispatch(isFetching(false))
			dispatch(getComments(data))
		})
		.catch(err => dispatch(getComments('Failed getting comments')));
	};
}

//envia el comentario a eliminar y devuelve todos los comentarios actualizados
export function fetchDeleteComment(comment) {
	return (dispatch) => {
		dispatch(isFetching(true))
		return fetch('/eliminarComentario', {
			headers: { "Content-Type" : "application/JSON" },
			method: "POST",
			credentials: "include",
			body: JSON.stringify(comments)
		})
		.then(response => response.json())
		.then(data => {
			dispatch(isFetching(false))
			dispatch(getComments(data))
		})
		.catch(err => dispatch(getComments('Failed deleting comments')));
	};
}

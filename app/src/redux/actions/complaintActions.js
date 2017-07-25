import fetch from 'isomorphic-fetch';
import { isFetching } from './otherActions';

//////////////////////////////////////////////////acciones para las amenities
export const GET_COMPLAINTS = 'GET_COMPLAINTS';

export function getComplaints(complaints) {
	return {
		type: GET_COMPLAINTS,
		complaints
	};
}

//crea un nuevo reclamo y devuelve todos los reclamos mas el que creé
export function fetchSendComplaint(complaint) {
	return (dispatch) => {
		dispatch(isFetching(true))
		return fetch('/reservar', {
			headers: { "Content-Type" : "application/JSON" },
			method: "POST",
			credentials: "include",
			body: JSON.stringify(complaints)
		})
			.then(response => response.json())
			.then(function(data) {
				dispatch(isFetching(false))
				data !== false? dispatch(getComplaints(data)): dispatch(getComplaints('Failed creating complaint'))
		})
	};
}

//devuelve todos los reclamos
export function fetchGetComplaints() {
	return (dispatch) => {
		dispatch(isFetching(true))
		return fetch('/traer-reservas', {
			headers: { "Content-Type" : "application/JSON" },
			method: "GET",
			credentials: "include",
			body: JSON.stringify(complaints)
		})
			.then(response => response.json())
			.then(function(data) {
				dispatch(isFetching(false))
				data !== false? dispatch(getComplaints(data)): dispatch(getComplaints('Failed getting complaints'))
		})
	};
}
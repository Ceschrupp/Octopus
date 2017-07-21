import fetch from 'isomorphic-fetch';


//////////////////////////////////////////////////acciones para las amenities
export const GET_RESERVES = 'GET_RESERVES';

export function getReserves() {
	return {
		type: GET_RESERVES
	};
}


export function fetchSendReserve(reserve) {
	return (dispatch) => {
/////////IS FETCHING
		return fetch('./api/reserve', {
			headers: { "Content-Type" : "application/JSON" },
			method: "POST",
			credentials: "include",
			body: JSON.stringify(user)
		})
			.then(response => response.json())
			.then(data => data !== false? dispatch(getReserves(data)) /*:STOP FETCHING /dispatch(failedToLogin()))*/;
	};
}

export function fetchGetReserves() {
	return (dispatch) => {
		dispatch(logUser()); /////////el fetch lo mando con toda esta bola?
		return fetch('./api/login', {
			headers: { "Content-Type" : "application/JSON" },
			method: "POST",
			credentials: "include",
			body: JSON.stringify(user)
		})
			.then(response => response.json())
			.then(data => data !== false? dispatch(getReserves(data)) /*: dispatch(failedToLogin()))*/;
	};
}

export function fetchDeleteReserve() {
	return (dispatch) => {
		dispatch(logUser()); /////////el fetch lo mando con toda esta bola?
		return fetch('./api/login', {
			headers: { "Content-Type" : "application/JSON" },
			method: "POST",
			credentials: "include",
			body: JSON.stringify(user)
		})
			.then(response => response.json())
			.then(data => data !== false? dispatch(getReserves(data)) /*: dispatch(failedToLogin()))*/;
	};
}

export function fetchEditReserve() {
	return (dispatch) => {
		dispatch(logUser()); /////////el fetch lo mando con toda esta bola?
		return fetch('./api/login', {
			headers: { "Content-Type" : "application/JSON" },
			method: "POST",
			credentials: "include",
			body: JSON.stringify(user)
		})
			.then(response => response.json())
			.then(data => data !== false? dispatch(getReserves(data)) /*: dispatch(failedToLogin()))*/;
	};
}
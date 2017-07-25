//////////////////////////////////////////////////accion para el fetch
export const IS_FETCHING = 'IS_FETCHING';

export function isFetching(boolean) {
	return {
		type: IS_FETCHING,
		boolean
	};
}

export const CHANGE_VIEW = 'CHANGE_VIEW';

export function changeView(view) {
	return {
		type: CHANGE_VIEW,
		view
	};
}

export const GET_NEWS = 'GET_NEWS';

export function getNews(news) {
	return {
		type: GET_NEWS,
		news
	};
}

export const GET_INFO = 'GET_INFO';

export function getInfo(info) {
	return {
		type: GET_INFO,
		info
	};
}

//devuelve las noticias
export function fetchGetNews() {
	return (dispatch) => {
		return fetch('/traerNoticias', {
			headers: { "Content-Type" : "application/JSON" },
			method: "GET",
			credentials: "include",
			body: JSON.stringify(news)
		})
			.then(response => response.json())
			.then(function(data) {
				data !== false? dispatch(getNews(data)): dispatch(getNews('Failed getting news'))
		})
	};
}

//devuelve los datos útiles de cada consorcio
export function fetchGetInfo() {
	return (dispatch) => {
		return fetch('/traerInfo', {
			headers: { "Content-Type" : "application/JSON" },
			method: "GET",
			credentials: "include",
			body: JSON.stringify(info)
		})
			.then(response => response.json())
			.then(function(data) {
				data !== false? dispatch(getInfo(data)): dispatch(getInfo('Failed getting info'))
		})
	};
}
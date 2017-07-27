//////////////////////////////////////////////////////AMENITIES ACTIONS
export const GET_BOOKINGS = 'GET_BOOKINGS';

export function getBookings(bookings) {
	return {
		type: GET_BOOKINGS,
		bookings
	};
}

//////////////////////////////////////////////////////COMPLAINTS ACTIONS
export const GET_COMPLAINTS = 'GET_COMPLAINTS';

export function getComplaints(complaints) {
	return {
		type: GET_COMPLAINTS,
		complaints
	};
}

//////////////////////////////////////////////////////COMMENTS ACTIONS
export const GET_COMMENTS = 'GET_COMMENTS';

export function getComments(comments) {
	return {
		type: GET_COMMENTS,
		comments
	};
}

//////////////////////////////////////////////////////OTHER ACTIONS
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

export const FAILED_TO_FETCH = 'FAILED_TO_FETCH';

export function failedToFetch(err) {
	return {
		type: FAILED_TO_FETCH,
		err
	};
}

export const ERROR = 'ERROR';

export function error(err) {
	return {
		type: ERROR,
		err
	};
}

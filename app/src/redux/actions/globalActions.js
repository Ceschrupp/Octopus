//////////////////////////////////////////////////////AMENITIES ACTIONS
export const GET_BOOKINGS = 'GET_BOOKINGS';

export function getBookings(bookings) {
	return {
		type: GET_BOOKINGS,
		bookings
	};
}

export const GET_MORE_BOOKINGS = 'GET_MORE_BOOKINGS';

export function getMoreBookings(bookings) {
	return {
		type: GET_MORE_BOOKINGS,
		bookings
	};
}

export const CREATE_BOOKING = 'CREATE_BOOKING';

export function createBooking(booking) {
	return {
		type: CREATE_BOOKING,
		booking
	};
}

export const EDIT_BOOKING = 'EDIT_BOOKING';

export function editBooking(booking) {
	return {
		type: EDIT_BOOKING,
		booking
	};
}

export const DELETE_BOOKING = 'DELETE_BOOKING';

export function deleteBooking(booking) {
	return {
		type: DELETE_BOOKING,
		booking
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

//////////////////////////////////////////////////////PAYMENTS ACTIONS
export const GET_PAYMENTS = 'GET_PAYMENTS';

export function getPayments(payments) {
	return {
		type: GET_PAYMENTS,
		payments
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

export const FAILED_TO_FETCH = 'FAILED_TO_FETCH';

export function failedToFetch(boolean) {
	return {
		type: FAILED_TO_FETCH,
		boolean
	}
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

export const ERROR = 'ERROR';

export function error(err) {
	return {
		type: ERROR,
		err
	};
}


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
		type: 'EDIT_BOOKING',
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

export const CREATE_COMPLAINT = 'CREATE_COMPLAINT';

export function createComplaint(complaint) {
	return {
		type: CREATE_COMPLAINT,
		complaint
	};
}

export const GET_MORE_COMPLAINTS = 'GET_MORE_COMPLAINTS';

export function getMoreComplaints(complaints) {
	return {
		type: GET_MORE_COMPLAINTS,
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

export const CREATE_COMMENT = 'CREATE_COMMENT';

export function createComment(comment) {
	return {
		type: CREATE_COMMENT,
		comment
	};
}

export const DELETE_COMMENT = 'DELETE_COMMENT';

export function deleteComment(id) {
	return {
		type: DELETE_COMMENT,
		id
	};
}

export const EDIT_COMMENT = 'EDIT_COMMENT';

export function editComment(comment) {
	return {
		type: EDIT_COMMENT,
		comment
	};
}

export const GET_MORE_COMMENTS = 'GET_MORE_COMMENTS';

export function getMoreComments(comments) {
	return {
		type: GET_MORE_COMMENTS,
		comments
	};
}

//////////////////////////////////////////////////////OTHER ACTIONS
export const BUILDING_NOW = 'BUILDING_NOW';

export function buildingNow(buildingNow){
	return{
		type: BUILDING_NOW,
		buildingNow
	};
}

export const IS_FETCHING = 'IS_FETCHING';

export function isFetching(boolean) {
	return {
		type: IS_FETCHING,
		boolean
	};
}

export const FAILED_TO_FETCH = 'FAILED_TO_FETCH';

export function failedToFetch(err) {
	return {
		type: FAILED_TO_FETCH,
		err
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

export const GET_MORE_NEWS = 'GET_MORE_NEWS';

export function getMoreNews(news) {
	return {
		type: GET_MORE_NEWS,
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

export const GET_MORE_INFO = 'GET_MORE_INFO';

export function getMoreInfo(info) {
	return {
		type: GET_MORE_INFO,
		info
	};
}

export const GET_EXPENSES = 'GET_EXPENSES';

export function getExpenses(expenses) {
	return {
		type: GET_EXPENSES,
		expenses
	};
}

export const GET_MORE_EXPENSES = 'GET_MORE_EXPENSES';

export function getMoreExpenses(expenses) {
	return {
		type: GET_MORE_EXPENSES,
		expenses
	};
}

export const GET_PAYMENTS = 'GET_PAYMENTS';

export function getPayments(payments) {
	return {
		type: GET_PAYMENTS,
		payments
	};
}

export const CREATE_PAYMENT = 'CREATE_PAYMENT';

export function createPayment(payment) {
	return {
		type: CREATE_PAYMENT,
		payment
	};
}

export const GET_MORE_PAYMENTS = 'GET_MORE_PAYMENTS';

export function getMorePayments(payments) {
	return {
		type: GET_MORE_PAYMENTS,
		payments
	};
}
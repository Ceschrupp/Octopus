import { GET_BOOKINGS, GET_MORE_BOOKINGS, CREATE_BOOKING, DELETE_BOOKING, EDIT_BOOKING } from '../actions/globalActions';

function amenitiesReducer(state = [] , action) {

	switch (action.type) {

	case GET_BOOKINGS: {
		return Object.assign({}, state, {
			bookings:action.bookings
		});
	}
	case GET_MORE_BOOKINGS: {
		return Object.assign({}, state, {
			bookings:action.bookings
		});
	}
	case CREATE_BOOKING: {
		return Object.assign({}, state, {
			bookings: action.booking
		});
	}
	case DELETE_BOOKING: {
		return Object.assign({}, state, {
			bookings: [
				...state.slice(0,state.map(ob=>ob.booking_id).indexOf(action.bookings.id)),
				...state.slice(state.map(ob=>ob.booking_id).indexOf(action.bookings.id)+1)
			]});
	}
	case EDIT_BOOKING: {
		return Object.assign({}, state, {
			bookings: [
				...state.slice(0,state.map(ob=>ob.booking_id).indexOf(action.booking.id)),
				action.booking,
				...state.slice(state.map(ob=>ob.booking_id).indexOf(action.booking.id)+1)
			]});
	}
	default:
		return state;
	}
}

export default amenitiesReducer;

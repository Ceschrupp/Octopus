import { GET_BOOKINGS } from '../actions/actionCreators';

function amenitiesReducer(state, action) {

	switch (action.type) {

		case GET_BOOKINGS:
			return Object.assign({}, state, {
				amenities: action.bookings,
			});

		default:
			return state;
	}
}

export default amenitiesReducer;
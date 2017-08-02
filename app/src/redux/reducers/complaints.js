import { GET_COMPLAINTS } from '../actions/globalActions';

function complaintsReducer(state = [] , action) {

	switch (action.type) {

	case GET_COMPLAINTS:
		return Object.assign({}, state, {
			complaints: action.complaints,
		});

	default:
		return state;
	}
}

export default complaintsReducer;

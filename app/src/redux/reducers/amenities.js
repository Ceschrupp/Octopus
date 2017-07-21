import { GET_RESERVES, DELETE_RESERVE, EDIT_RESERVE } from '../actions/actionCreators';

function userStuffReducer(state = {
		user: null,
		isLoged: false,//WHATTT
}, action) {

	switch (action.type) {

		case GET_RESERVES:
			return Object.assign({}, state, {
					user: {},
					isLoged: false,	
					isLoging: false,
					logErr: false
			});

		case DELETE_RESERVE:
			return Object.assign({}, state, {
				isLoging: false,
				user: action.user,
				isLoged: true,
				logErr: false	
			});

		case EDIT_RESERVE:
			return Object.assign({}, state, {
				isLoging: false,
				logErr: true
			});

		default:
			return state;
	}
}

export default logingReducer;
import { LOG_OUT, LOG_USER, LOGIN_OK, FAILED_TO_LOGIN } from '../actions/actionCreators';

function userStuffReducer(state = {
		user: null,
		isLoged: false,//WHATTT
}, action) {

	switch (action.type) {

		case LOG_OUT:
			return Object.assign({}, state, {
					user: {},
					isLoged: false,	
					isLoging: false,
					logErr: false
			});

		case LOG_USER:
			return Object.assign({}, state, {
				isLoging: true
			});

		case LOGIN_OK:
			return Object.assign({}, state, {
				isLoging: false,
				user: action.user,
				isLoged: true,
				logErr: false	
			});

		case FAILED_TO_LOGIN:
			return Object.assign({}, state, {
				isLoging: false,
				logErr: true
			});

		default:
			return state;
	}
}

export default logingReducer;
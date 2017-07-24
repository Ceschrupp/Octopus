import { LOG_OUT, LOGIN_OK, FAILED_TO_LOGIN } from '../actions/actionCreators';

function userStuffReducer(state = {
		user: null,
		isLogged: false,//WHATTT
}, action) {

	switch (action.type) {

		case LOG_OUT:
			return Object.assign({}, state, {
					user: {},
					isLogged: false,	
					logErr: false
			});

		case LOGIN_OK:
			return Object.assign({}, state, {
				user: action.user,
				isLogged: true,
				logErr: false	
			});

		case FAILED_TO_LOGIN:
			return Object.assign({}, state, {
				logErr: true
			});

		default:
			return state;
	}
}

export default userStuffReducer;
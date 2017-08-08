import { LOG_OUT, USER_SUCCESS, USER_FAIL } from '../actions/userActions';

function userStuffReducer(state = {
	user: {},
	isLogged: false,
	logErr: false
}, action) {

	switch (action.type) {

	case LOG_OUT:
		return Object.assign({}, state, {
			user: {},
			isLogged: false,
			logErr: false
		});

	case USER_SUCCESS:
		return Object.assign({}, state, {
			user: action.user,
			isLogged: true,
			logErr: false
		});

	case USER_FAIL:
		return Object.assign({}, state, {
			logErr: action.err
		});

	default:
		return state;
	}
}

export default userStuffReducer;

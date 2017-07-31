import { GET_COMMENTS, ADD_COMMENTS } from '../actions/globalActions';

function commentsReducer(state = [] , action) {

	switch (action.type) {

		case GET_COMMENTS:
			return Object.assign({}, state, {
				comments: action.comments,
			});
		case ADD_COMMENTS:
			return Object.assign({}, state, {comment:action.comment, username:action.user})

		default:
			return state;
	}
	return state;
}

export default commentsReducer;


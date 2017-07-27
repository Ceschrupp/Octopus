import { GET_COMMENTS } from '../actions/globalActions';

function commentsReducer(state = [] , action) {

	switch (action.type) {

		case GET_COMMENTS:
			return Object.assign({}, state, {
				comments: action.comments,
			});

		default:
			return state;
	}
}

export default commentsReducer;


import { GET_COMMENTS } from '../actions/actionCreators';

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


import { IS_FETCHING, CHANGE_VIEW, GET_NEWS, GET_INFO } from '../actions/actionCreators';

function otherReducer(state = {
		"view": "Menú",
		"news": [],
		"info": [],
		"isFetching": false } , action) {

	switch (action.type) {

		case IS_FETCHING:
			return Object.assign({}, state, {
					"isFetching": action.boolean
			});

		case CHANGE_VIEW:
			return Object.assign({}, state, {
					view: action.view
			});

		case GET_NEWS:
			return Object.assign({}, state, {
					news: action.news
			});

		case GET_INFO:
			return Object.assign({}, state, {
					info: action.info
			});

		default:
			return state;
	}
}

export default otherReducer;

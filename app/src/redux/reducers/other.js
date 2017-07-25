import { IS_FETCHING } from '../actions/actionCreators';

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

		default:
			return state;
	}
}

export default otherReducer;

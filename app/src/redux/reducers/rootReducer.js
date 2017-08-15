import { combineReducers } from 'redux';

//import reducers
import other from './other';
import complaints from './complaints';
import comments from './comments';
import amenities from './amenities';
import userStuff	from './userStuff';

//combine reducers
const InitialState = {
	userStuff: {
		user: {},
		isLogged: false,
		logErr: false
	},
	other: {
		view: 'Menú',
		news: [],
		info: [],
		expenses: [],
		payments: [],
		isFetching: false,
		failedToFetch: false
	},
	amenities: [],
	complaints: [],
	comments: []
};
const appReducer = combineReducers({other, amenities, complaints, comments, userStuff});

const rootReducer = (state, action) => {
	if (action.type === 'LOG_OUT') {
		state = InitialState;
	}
	return appReducer(state, action);
};

export default rootReducer;

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


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
		view: "Menú",
		news: [],
		info: [],
		isFetching: false,
		failedToFetch: false,
		error: null
	},
	amenities: [],
	complaints: [],
	comments: []
};
const appReducer = combineReducers({other, amenities, complaints, comments, userStuff, routing: routerReducer});

const rootReducer = (state, action) => {
	if (action.type === 'LOG_OUT') {
		state = InitialState
	}
	return appReducer(state, action)
}

export default rootReducer;

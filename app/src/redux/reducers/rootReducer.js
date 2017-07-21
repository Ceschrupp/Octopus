import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


//import reducers
import other from './other';
import complaints from './complaints';
import amenities from './amenities';
import userStuff	from './userStuff';

//combine reducers
const InitialState = {
	userStuff: {
		user: {},
		isLoged: false,	
		logErr: false,
		isLoging: false
	},
	other: {
		view: "Menú",
		news: [],
		info: [],
		isFetching: false
	},
	amenities: [],
	complaints: []
};

const appReducer = combineReducers({other, complaints, amenities, userStuff, routing: routerReducer});

const rootReducer = (state, action) => {
	if (action.type === 'LOG_OUT') {
		state = InitialState
	}
	return appReducer(state, action)
}

export default rootReducer;
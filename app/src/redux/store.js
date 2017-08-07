import thunkMiddleware from 'redux-thunk';
import {hashHistory} from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

//estado inicial
const InitialState = {
	userStuff: {
		user: {},
		isLogged: false,
		logErr: false,
		building: {},
	},
	other: {
		view: "Home",
		news: [],
		info: [],
		isFetching: false,
		failedToFetch: false,
		error: null
	},
	amenities: [],
	complaints: [],
	comments: []
	//agregar edificios
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, InitialState, composeEnhancers( applyMiddleware(thunkMiddleware)));

export default store;

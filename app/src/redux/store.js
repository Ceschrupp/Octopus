import thunkMiddleware from 'redux-thunk';
import { hashHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

//estado inicial
const InitialState = {
	userStuff: {
		user: {
			buildings:[
				{
					building_id: 2,
					buildingName: 'unalinea'
				}, {
					building_id: 5,
					buildingName: 'ceci'
				}
			]
		},
		isLogged: false,
		logErr: false
	},
	other: {
		view: 'Home',
		news: [],
		info: [],
		isFetching: false,
<<<<<<< HEAD
		failedToFetch: false
=======
		failedToFetch: false,
		error: null,
		buildingNow: null
>>>>>>> 694f47ee0b323365867dadb3b0416e8bc2faeab4
	},
	amenities: [],
	complaints: [],
	comments: []
	//agregar edificios
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, InitialState, composeEnhancers( applyMiddleware(thunkMiddleware)));

export default store;

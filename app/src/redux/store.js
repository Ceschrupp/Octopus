import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

//estado inicial
const InitialState = {
	userStuff: {
		user: {},
		isLogged: false,
		logErr: false
	},
	other: {
		view: "Home",
		news: [],
		info: [],
		isFetching: false
	},
	amenities: []
	// complaints: []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, InitialState, composeEnhancers( applyMiddleware(thunkMiddleware)));

export default store;

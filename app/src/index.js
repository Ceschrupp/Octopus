import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './redux/store.js';
import { render } from 'react-dom';
import App from './containers/App';
import Main from './containers/Main';
import LoginForm from './components/elements/LoginForm';
import ForgotPassword from './components/elements/ForgotPassword';
import AmenitiesContainer from './containers/AmenitiesContainer';
import AmenitiesList from './components/elements/AmenitiesList';
import AmenitiesForm from './components/elements/AmenitiesForm';

import ComplaintsContainer from './containers/ComplaintsContainer';

//import containers

// import PaymentNotice from './containers/PaymentNotice';
// import Expenses from './containers/Expenses';
// import Account from './containers/Account';
// import News from './containers/News';
// import UsefulInfo from './containers/UsefulInfo';
// import MeanWhile from './components/elements/meanwhileLoginForm'

// import MyAccount from './containers/MyAccount';

//routes
const router = (
			<Provider store ={store}>
				<Router history={hashHistory}>
					<Route path='/' component={App}>
						<IndexRoute component={LoginForm}/>
						<Route path='/' component={Main} />
						<Route path='/amenities' component={LoginForm} />
						<Route path='/olvide-clave' component={ForgotPassword} />
						<Route path='/ver-reservas' component={AmenitiesList} />
						<Route path='/detalle-reserva' component={Amenity} />
					</Route>
				</Router>
			</Provider>
	)

render(router, document.getElementById('app'));

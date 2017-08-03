import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './redux/store.js';

//import containers

import App from './containers/App';
import Main from './containers/Main';
import Home from './containers/Home';
import PaymentNotice from './components/elements/paymentNotice';
import LatestExpenses from './components/elements/latestExpenses';
import MyAccount from './containers/MyAccount';
import LatestNews from './components/elements/latestNews';
import UsefulInfo from './components/elements/usefulInfo';
import AmenitiesContainer from './containers/AmenitiesContainer';
import ComplaintsContainer from './components/complaints/ComplaintsContainer';
import Balance from './containers/Balance';
import AmenitiesEditContainer from './containers/AmenitiesEditContainer';



//import components
import LoginForm from './components/elements/LoginForm';
import Logout from './components/elements/Logout';
import ForgotPassword from './components/elements/ForgotPassword';
import AmenitiesForm from './components/elements/AmenitiesForm';
import SignupForm from './components/elements/SignupForm';
import AmenitiesList from './components/elements/AmenitiesList';

//import react router deps


//routes
const router = (
	<Provider store ={store}>
		<Router history={hashHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path='/informar-pagos' component={PaymentNotice}></Route>
				<Route path='/expensas' component={LatestExpenses}></Route>
				<Route path='/cuenta-corriente' component={Balance}></Route>
				<Route path='/novedades' component={LatestNews}></Route>
				<Route path='/registro' component={SignupForm}></Route>
				<Route path='/cuenta/:username' component={MyAccount}></Route>
				<Route path='/datos-utiles' component={UsefulInfo}></Route>
				<Route path='/reservar-amenities/new' component={AmenitiesForm}></Route>
				<Route path='/reservar-amenities/edit/:bookingId' component={AmenitiesEditContainer}></Route>
				<Route path='/ver-reservas' component={AmenitiesList}></Route>
				<Route path='/amenities' component={AmenitiesContainer}></Route>
				<Route path='/reclamos' component={ComplaintsContainer}></Route>
				<Route path='/login' component={LoginForm}></Route>
				<Route path='/logout' component={Logout}></Route>
				<Route path='/olvide-clave' component={ForgotPassword}></Route>
			</Route>
		</Router>
	</Provider>
);

render(router, document.getElementById('app'));

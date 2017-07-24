import React from 'react';
import { render } from 'react-dom';

//import containers
<<<<<<< HEAD
import App from 'Containers/App';
import Main from 'Containers/Main';
=======
import App from './containers/App';
import Main from './containers/Main';
import PaymentNotice from './containers/PaymentNotice';
import Expenses from './containers/Expenses';
import Account from './containers/Account';
import News from './containers/News';
import UsefulInfo from './containers/UsefulInfo';
import AmenitiesContainer from './containers/AmenitiesContainer';
import ComplaintsContainer from './containers/ComplaintsContainer';
import MyAccount from './containers/MyAccount';
>>>>>>> cecilia

//import components


//import react router deps
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './redux/store.js';

//routes
const router = (

			<Provider store ={store}>
			 <Router history={hashHistory}>
					 <Route path='/' component={App}>
							<IndexRoute component={Main}></IndexRoute>
							<Route path='/informar-pagos' component={PaymentNotice}></Route>
							<Route path='/expensas' component={Expenses}></Route>
							<Route path='/cuenta-corriente' component={Account}></Route>
							<Route path='/novedades' component={News}></Route>
							<Route path='/datos-utiles' component={UsefulInfo}></Route>
							<Route path='/amenities' component={AmenitiesContainer}></Route>
							<Route path='/reclamos' component={ComplaintsContainer}></Route>
							<Route path='/:username' component={MyAccount}></Route>
							<Route path='/' component={Main}></Route>
						</Route>
				</Router>
			</Provider>
>>>>>>> cecilia
	)

render(router, document.getElementById('app'));

import React from 'react';
import { render } from 'react-dom';


//import containers

import App from './containers/App';
import Main from './containers/Main';
// import PaymentNotice from './containers/PaymentNotice';
// import Expenses from './containers/Expenses';
// import Account from './containers/Account';
// import News from './containers/News';

import AmenitiesContainer from './containers/AmenitiesContainer';

import ComplaintsContainer from './containers/ComplaintsContainer';



//import components


//import react router deps
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './redux/store.js';

//routes
const router = (
			<Provider store ={store}>
<<<<<<< HEAD
			 <Router history={hashHistory}>
					 <Route path='/' component={App}>

						 	<IndexRoute component={AmenitiesContainer}/>




							<Route path='/amenities' component={AmenitiesContainer}></Route>


							<Route path='/' component={Main}></Route>
						</Route>
=======
				<Router history={hashHistory}>
					<Route path='/' component={App}>
						<IndexRoute component={AmenitiesContainer}/>
						<Route path='/amenities' component={AmenitiesContainer} />
						<Route path='/' component={Main} />
					</Route>
>>>>>>> 516f3968725d89b38c96c824ab23bdbb9d273365
				</Router>
			</Provider>
	)

render(router, document.getElementById('app'));

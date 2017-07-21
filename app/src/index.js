import React from 'react';
import { render } from 'react-dom';

//import containers
import App from 'Containers/App';
import Main from 'Containers/Main';

//import components


//import react router deps
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import store from 'Redux/store';

//routes
const router = (
		<Provider store= {store}>
			<Router history= {hashHistory}>
				<Route path='/' component={App}>
				<IndexRoute component={Home}></IndexRoute>
			{/*		<Route path='/view/:user' component={User}></Route>
						<Route path='/login' component={LogUsr}></Route>
						<Route path='/register' component={RegUsr}></Route>
						<Route path='/view/movie/:id' component={Peli}></Route>*/}
				</Route>
			</Router>
		</Provider>
	)

render(router, document.getElementById('app'));
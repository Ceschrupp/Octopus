import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators.js';
import Main from './Main';

//guarda el store en los props
function mapStateToProps(state) {
	return {
		userStuff: {
			user: state.userStuff.user,
			isLogged: state.userStuff.isLogged,
			logErr: state.userStuff.logErr,
			buildingNow: state.userStuff.buildingNow,
		},
		other: {
			view: state.view,
			news: [state.news],
			info: [state.info],
			expenses: state.expenses,
			isFetching: state.isFetching,
			failedToFetch: state.failedToFetch,
			error: state.error
		},
		amenities: state.amenities,
		complaints: state.complaints,
		comments: state.comments
	};
}

//le pasa la funcionalidad dispatch a los props
function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;

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
			view: state.other.view,
			news: [state.other.news],
			info: [state.other.info],
			expenses: state.other.expenses,
			isFetching: state.other.isFetching,
			failedToFetch: state.other.failedToFetch
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

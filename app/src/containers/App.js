import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators.js';
import Main from './Main';

//guarda el store en los props
function mapStateToProps(state) {
	return {
		userStuff: {
			user: state.user,
			isLoged: state.isLoged,
			logErr: state.logErr
			isLoging: state.isLoging
		},
		other: {
			view: state.view,
			news: state.news,
			info: state.info,
			isFetching: state.isFetching
		},
		amenities: state.amenities,
		complaints: state.complaints
	}
};

//le pasa la funcionalidad dispatch a los props
function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
};

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
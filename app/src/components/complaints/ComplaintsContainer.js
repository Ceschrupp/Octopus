import React from 'react';
import ComplaintCreateForm from './ComplaintCreateForm';
import ComplaintsList from './ComplaintsList';
import Fetching from '../elements/Fetching';
import * as actionCreators from '../../redux/actions/actionCreators.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const s = require('./styles/ComplaintsContainer.scss');

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

function mapStateToProps(state) {
	return {
		userStuff: {
			user: state.user,
			isLogged: state.isLogged,
			logErr: state.logErr,
		},
		complaints: state.complaints,
		other: {
			isFetching: state.isFetching,
			failedToFetch: state.failedToFetch,
			error: state.error
		}
	};
}

class ComplaintsContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componenerWillMount() {
		this.props.fetchGetComplaints();
	}

	render() {
		if(this.props.other.isFetching) {
			return (

				<div id={s.container}>
					<div>
						<Fetching />
					</div>
				</div>

			);
		} else {
			return (
				<div id={s.container}>
					<div>	
						<ComplaintCreateForm {...this.props}/>
						<ComplaintsList {...this.props}/>
					</div>
				</div>
			);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintsContainer);

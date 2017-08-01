import React from 'react';
import ComplaintCreateForm from './ComplaintCreateForm';
import ComplaintsList from './ComplaintsList';
import Fetching from '../elements/Fetching';
import * as actionCreators from '../../redux/actions/actionCreators.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

function mapStateToProps(state) {
	return {
		complaints: state.complaints,
		other: {
			isFetching: state.isFetching,
			failedToFetch: state.failedToFetch,
			error: state.error
		},
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
		if(this.state.other.isFetching) {
			return (
				<div>
					<Fetching />
				</div>
			);
		} else {
			return (
				<div>
					<ComplaintCreateForm {...this.props}/>
					<ComplaintsList {...this.props}/>
				</div>
			);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintsContainer);

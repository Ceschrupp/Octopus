import React from 'react';
import ComplaintCreateForm from './ComplaintCreateForm';
import ComplaintsList from './ComplaintsList';
import * as actionCreators from '../../redux/actions/actionCreators.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

function mapStateToProps(state) {
	return {
		complaints: state.complaints
	};
}

class ComplaintsContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componenerWillMount() {
		this.props.fetchGetComplaints();
	}
	///PASARLE SOLO LOS PROPS QUE NECESITAN
	//IS FETCHING
	render() {
		return (
			<div>
				<ComplaintCreateForm />
				<ComplaintsList />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintsContainer);

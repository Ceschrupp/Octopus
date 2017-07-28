import React from 'react';
import ComplaintCreateForm from './ComplaintCreateForm';
import ComplaintsList from './ComplaintsList';

export default class ComplaintsContainer extends React.Component {
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
				<ComplaintCreateForm {...this.props}/>
				<ComplaintsList {...this.props}/>
			</div>
		);
	}
}

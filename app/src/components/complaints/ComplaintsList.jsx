import React from 'react';
import ComplaintsItemList from './ComplaintsItemList';
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

class ComplaintsList extends React.Component {

	getMore(e) {
		e.preventDefault();
		const pag = (this.props.complaints.length / 10) + 1;
		this.props.fetchGetMoreComplaints('/reclamos');/*/${pag}*/
	}

	getMoreButton() {
		if (this.props.complaints[this.props.complaints.length-1] !== 'end') {
			return (
				<div>
					<button onClick={this.getMore}>
						Ver más
					</button>
				</div>
			);
		}
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="lista-complaints">
				{this.props.complaints.map((complaint, i) => {
					return( 
						<ComplaintsItemList {...this.props} key={i} i={i} complaint={complaint} /> 
					); } 
				)}
				{this.getMoreButton()}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintsList);
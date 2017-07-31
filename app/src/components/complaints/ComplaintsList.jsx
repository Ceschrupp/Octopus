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
	constructor(props) {
		super(props);
	}
	//HACER LA ACCION DE SCROLL
	render() {
		return (
			<div className="lista-complaints">
				{this.props.complaints.map((complaint, i) => {
					return( 
						<ComplaintsItemList {...this.props} key={i} i={i} complaint={complaint} /> 
					); } 
				)}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintsList);
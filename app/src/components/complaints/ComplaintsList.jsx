import React from 'react';
import ComplaintsItemList from './ComplaintsItemList'

export default class ComplaintsList extends React.Component {
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
					)} 
				)}
			</div>
		)
	}
};

import React from 'react';
import Complaint from './Complaint';
import CommentsContainer from './comments/CommentsContainer';


export default class ComplaintsItemList extends React.Component {
	constructor(props) {
		super(props);
	}
	///PASARLE SOLO LOS PROPS QUE NECESITAN
	render() {
		return (
			<div>
				<Complaint {...this.props} complaint= {this.props.complaint} />
				<CommentsContainer {...this.props}/>
			</div>
		);
	}
}

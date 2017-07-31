import React from 'react';

export default class Complaint extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(){
		this.props.fetchDeleteComplaint(this.complaint);
	}

	render() {

		const deleteComplaintButton = function() {
			if(this.props.complaint.user_id === this.props.userStuff.user.user_id) {
				return <button onClick={this.handleSubmit}>Eliminar</button>;
			} else { 
				return '';
			} 
		};
		
		return (
			<div>
				<div>
					{this.props.complaint.title}
				</div>
				<div>
					{this.props.complaint.initiateComplaintDate}
				</div>
				<div>
					{this.props.complaint.state}
				</div>
				<div>
					{this.props.complaint.userName}
				</div>
				<div>
					{this.props.complaint.files}
				</div>
				{deleteComplaintButton()}
			</div>
		);
	}
}
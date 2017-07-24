import React from 'react';
import {Link} from 'react-router';
// import AllComplaints from './AllComplaints';
import UploadBox from '../components/elements/fileUploadBox';
import SubmitButton from '../components/elements/SubmitButton';

export default class ComplaintsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.props.initiateComplaint=this.props.initiateComplaint.bind(this);
	}
	initiateComplaint(e) {
		e.preventDefault();
		const {complaintId} = this.props.params;
		const complaintTitle = this.refs.complaintTitle.value;
		const complaintDetail = this.refs.complaintDetail.value;
		this.props.createComplaint(complaintId, complaintTitle, complaintDetail);
		this.refs.complaintForm.reset();
	}
	render() {

			if (this.initiateComplaint) {
				return (
				<div className='complaintInitiated'>
					<AllComplaints />
				</div>
			)
		}else{
			return(
			<div className='complaintsContainer'>
				<Form className='complaintForm' ref='complaintForm'>
					<input className='complaintInput' placeholder='Asunto' ref='complaintTitle'></input>
					<textarea className='ComplaintTextArea' placeholder='Ingrese comentarios aquí' ref='complaintDetail'></textarea>
					<UploadBox />
					<SubmitButton onClick={this.initiateComplaint} />
				</Form>
			</div>
			)
		}
	}
};

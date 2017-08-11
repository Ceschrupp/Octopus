import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Complaint from './SingleComplaintWithComments';

export default class ComplaintsList extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		const i = this.props.complaints.findIndex((complaint)=> complaint.complaintId === this.props.params.complaintId);
		const complaint = this.props.complaint[i];
		const comments = this.props.comments[this.props.params] || [];
		 
		return (
			<Row>
				<Col md={3} lg={3}/>
				<Col md={6} lg={6}>
					<Complaint i = {i} complaint = { complaint } comments = { comments } { ...this.props } />
				</Col>
			</Row>

		)
	}
}
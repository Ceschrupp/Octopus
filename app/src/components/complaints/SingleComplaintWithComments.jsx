import React from 'react';
import Comments from './comments/CommentsContainer';
import { Container, Row, Col } from 'react-grid-system';

export default class Complaint extends React.Component {
	constructor(props) {
		super(props);
		this.expandComplaintBody = this.expandComplaintBody.bind(this);
		this.state = {
			view: 'allCollapsed'
		}
	}
	expandComplaintBody() {
		this.refs.complaintTitleBar.classList.toggle('fa-plus');
		this.refs.complaintTitleBar.classList.toggle('fa-minus');
		this.state.view = 'expandComplaintBody';
	}
	render () {
		if (this.state.view === 'allCollapsed') {
			return (
			<Row>
				<Col md={3} lg={3}/>
				<Col md={6} lg={6}>
					<div onClick={ this.expandComplaintBody }>
						<i className='fa fa-plus' ref='complaintTitleBar' />
						<p>{ this.props.complaint.title }</p>
						<p>{ this.props.complaint.state }</p>
					</div>
				</Col>
			</Row>
			)
		} else if (this.state.view === 'expandedComplaint') {
			return (
				<Row>
					<Col md={3} lg={3}/>
					<Col md={6} lg={6}>
						<div onClick={ this.state.view = 'allCollapsed' }>
							<i className='fa fa-plus' ref='complaintTitleBar' />
							<p>{ this.props.complaint.title }</p>
							<p>{ this.props.complaint.state }</p>
						</div>
						<div ref='complaintBody'>
							<p>{ this.props.complaint.body }</p>
							<p>{ this.props.complaint.files }</p>
							<p onClick={ this.state.view = 'allExpanded' }>{ this.props.comments.length } Comentarios</p>
							<p>Iniciada por {this.props.complaint.complaintName}</p>
							<p>({this.props.complaint.initiateComplaintDate}).</p>
						</div>
					</Col>
				</Row>
				)
			}
			return (
				<Row>
					<Col md={3} lg={3}/>
					<Col md={6} lg={6}>
						<div onClick={ this.state.view = 'allCollapsed' }>
							<i className='fa fa-plus' ref='complaintTitleBar' />
							<p>{ this.props.complaint.title }</p>
							<p>{ this.props.complaint.state }</p>
						</div>
						<div ref='complaintBody'>
							<p>{ this.props.complaint.body }</p>
							<p>{ this.props.complaint.files }</p>
							<p onClick={ this.state.view = 'allExpanded' }>{ this.props.comments.length } Comentarios</p>
							{ this.props.comments.map((comment, i) => <Comments {...this.props} key={i} i={i} comment={comment} /> ) }
							<p>Iniciada por {this.props.complaint.complaintName}</p>
							<p>({this.props.complaint.initiateComplaintDate}).</p>
						</div>
					</Col>
				</Row>
			)
		}		
}
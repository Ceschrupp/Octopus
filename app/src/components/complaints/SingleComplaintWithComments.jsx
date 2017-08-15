import React from 'react';
import Comments from './comments/CommentsContainer';
import { Container, Row, Col } from 'react-grid-system';
const s = require('./styles/SingleComplaintWithComments.scss');

export default class Complaint extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			view: 'allCollapsed'
		}
		this.changeView = this.changeView.bind(this);
	}
	changeView(event) {
		event.preventDefault();
		let view = event.target.id;
		this.setState ({
			view: view
		})
	}

	render () {
		if (this.state.view === 'allCollapsed') {
			return (
			<Row>
				<Col md={3} lg={2}/>
				<Col md={8} lg={8}>
					<div onClick={ this.changeView } className={s.complaintBox} id='expandedComplaint'>
						<div className={s.plus} id='expandedComplaint'><i className='fa fa-plus'  /></div>
						<p className={s.title} id='expandedComplaint'>{ this.props.complaint.title }</p>
						<p className={s.complaintState} id='expandedComplaint'>Estado: { this.props.complaint.state }</p>
					</div>
				</Col>
			</Row>
			)
		} else if (this.state.view === 'expandedComplaint') {
			return (
				<Row>
					<Col md={3} lg={2} />
					<Col md={8} lg={8}>
					<div className={s.complaintBox}>
						<div onClick={ this.changeView } id='allCollapsed'>
							<div className={s.minus} id='allCollapsed'><i className='fa fa-minus' /></div>
							<p className={s.title} id='allCollapsed'>{ this.props.complaint.title }</p>
							<p className={s.complaintState} id='allCollapsed'>Estado: { this.props.complaint.state }</p>
						</div>
						<div ref='complaintBody'>
							<p>{ this.props.complaint.body }</p>
							<div className={s.images}>
								{ this.props.complaint.files.map((image, i) => <a href={ image } key={i}><img key={i} i={i} src={ image } className={s.preview} /></a> ) }
							</div>
							<p onClick={ this.changeView } className={s.comments} id='allExpanded'>{ this.props.comments.length } Comentarios</p>
							<div className={s.userNameLine}>Iniciado por <p className={s.userName}>{ this.props.complaint.complaintName }</p></div>
							<p className={s.complaintDate}>({ this.props.complaint.initiateComplaintDate })</p>
						</div>
					</div>
					</Col>
				</Row>
				)
			}
			return (
				<Row>
					<Col md={3} lg={2}/>
					<Col md={8} lg={8}>
					<div className={s.complaintBox}>
						<div onClick={ this.changeView } id='allCollapsed'>
							<div className={s.minus} id='allCollapsed'><i className='fa fa-minus' /></div>
							<p className={s.title} id='allCollapsed'>{ this.props.complaint.title }</p>
							<p className={s.complaintState} id='allCollapsed'>Estado: { this.props.complaint.state }</p>
						</div>
						<div ref='complaintBody'>
							<p>{ this.props.complaint.body }</p>
							<div className={s.images}>
								{ this.props.complaint.files.map((image, i) => <a href={ image } key={i}><img key={i} i={i} src={ image } className={s.preview} onClick={ this.changeView }/></a> ) }
							</div>
							<div onClick={ this.changeView } className={s.comments} id='expandedComplaint'>
								<p id='expandedComplaint'>{ 'this.props.comments.length' } Comentarios</p>
								{ this.props.comments.map((comment, i) => <Comments {...this.props} key={i} i={i} comment={comment} /> ) }
							</div>
							<div className={s.userNameLine}>Iniciado por <p className={s.userName}>{ this.props.complaint.complaintName }</p></div>
							<p className={s.complaintDate}>({ this.props.complaint.initiateComplaintDate }).</p>
						</div>
					</div>
					</Col>
				</Row>
			)
		}		
}
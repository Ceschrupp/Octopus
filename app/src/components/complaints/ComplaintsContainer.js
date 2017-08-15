import React from 'react';
import ComplaintsCreateForm from './ComplaintCreateForm';
import ComplaintsList from './ComplaintsList';
import * as actionCreators from '../../redux/actions/actionCreators.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import SingleComplaintWithComments from './SingleComplaintWithComments';
const s = require('./styles/ComplaintsContainer.scss');

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

function mapStateToProps(state) {
	return {
		userStuff: {
			user: state.user,
			isLogged: state.isLogged,
			logErr: state.logErr,
			buildings: state.buildings
		},
		complaints: state.complaints,
		other: {
			isFetching: state.isFetching,
			failedToFetch: state.failedToFetch,
			error: state.error
		}
	};
}

export default class ComplaintsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			view:'complaintsList'

		}

		this.changeView = this.changeView.bind(this);
	}

	componentWillMount() {

		this.props.fetchGetComplaints();
	}

	changeView(event) {
		event.preventDefault();
		let view = event.target.className;
		this.setState({
			view: view
		})
	}
	render() {
		let view = this.state.view;
		if (view === 'complaintsForm') {
			return (
				<Row>
					<Col md={3} lg={2}/>
					<Col md={8} lg={8}>
						<div id={s.createButtonBar}>
							<button onClick={ this.changeView } className='complaintsList' id={s.createButton}>Volver</button>
						</div>
							<ComplaintsCreateForm  />
						<div>
							{ this.props.complaints.map((complaint, i) => <SingleComplaintWithComments {...this.props} key={i} i={i} complaint={complaint} /> ) }
						</div>
					</Col>
				</Row>
			)
		} else if ( view === 'complaintsList' && !this.props.complaints.length ) {
		return (
			<Row>
				<Col md={3} lg={2}/>
				<Col md={8} lg={8}>
					<div id={s.createButtonBar}>
						<button onClick={ this.changeView } className='complaintsForm' id={s.createButton}>Crear Reclamo</button>
					</div>
					<div className={s.noComplaints}><p>No hay reclamos para mostrar.</p></div>
				</Col>
			</Row>
		)} else if ( view === 'complaintsForm' && !this.props.complaints.length ) {
			return (
				<Row>
					<Col md={3} lg={2}/>
					<Col md={8} lg={8}>
						<div id={s.createButtonBar}>
							<button onClick={ this.changeView } className='complaintsList' id={s.createButton}>Volver</button>
						</div>
						<ComplaintsCreateForm id={s.form}  />
						<div className={s.noComplaints}><p>No hay reclamos para mostrar.</p></div>
					</Col>
				</Row>
			)
		}
		return (
			<Row>
				<Col md={3} lg={2}/>
				<Col md={8} lg={8}>
						<div id={s.createButtonBar}>
							<button onClick={ this.changeView } className='complaintsList' id={s.createButton}>Crear Reclamo</button>
						</div>
						<div>
							{ this.props.complaints.map((complaint, i) => <SingleComplaintWithComments {...this.props} key={i} i={i} complaint={complaint} /> ) }
						</div>
				</Col>
			</Row>

			)
	}
}

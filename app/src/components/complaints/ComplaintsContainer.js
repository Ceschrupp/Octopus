import React from 'react';
import ComplaintsCreateForm from './ComplaintCreateForm';
import ComplaintsList from './ComplaintsList';
import * as actionCreators from '../../redux/actions/actionCreators.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
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
		console.log('###########COMPLAINTSSSSS', this.props.complaints)
		this.props.fetchGetComplaints();
	}
//function para que cambie el state de la vista:
	changeView(event) {
		event.preventDefault();
		const view = event.target.className;
		this.setState({
			view: view
		})
	}
	render() {
		const view = this.state.view;
		if (view === 'complaintsForm') {
			return (
				<Row>
					<Col md={3} lg={3}/>
					<Col md={6} lg={6}>
						<div>
							<button onClick={ this.changeView } className='complaintsList'>Ver Todos</button>
							<button onClick={ this.changeView } className='complaintsForm'>Crear Reclamo</button>
						</div>
						<ComplaintsCreateForm {...this.props} />
					</Col>
				</Row>
			);
		} else if (!this.props.complaints.length) {

		return (
			<Row>
				<Col md={3} lg={3}/>
				<Col md={6} lg={6}>
					<div>
						<button onClick={ this.changeView } className='complaintsList'>Ver Todos</button>
						<button onClick={ this.changeView } className='complaintsForm'>Crear Reclamo</button>
					</div>
					<p>No hay reclamos para mostrar.</p>
				</Col>
			</Row>
		)} else if (view === 'complaintsList') {
		return (
			<Row>
				<Col md={3} lg={3}/>
				<Col md={6} lg={6}>
					<div>
						<button onClick={ this.changeView } className='complaintsList' >Ver Todos</button>
						<button onClick={ this.changeView } className='complaintsForm' >Crear Reclamo</button>
					</div>
					{ this.props.complaints.map((complaint, i) => <ComplaintsList {...this.props} key={i} i={i} complaint={complaint} /> ) }
				</Col>
			</Row>
	)}}
}
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
<<<<<<< HEAD
		}
=======
		};
>>>>>>> 24865f64e2e9dfa854510cce2d30ba63ab389e3f
		this.changeView = this.changeView.bind(this);
	}

	componentWillMount() {
<<<<<<< HEAD
		this.props.fetchGetComplaints();
	}
	
=======
		console.log('######COMPLAINTS', this.props.complaints);
		this.props.fetchGetComplaints();
	}
	//function para que cambie el state de la vista:
>>>>>>> 24865f64e2e9dfa854510cce2d30ba63ab389e3f
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
<<<<<<< HEAD
			)
		} else if ( view === 'complaintsList' && !this.props.complaints.length ) {
=======
			);
		} else if (!this.props.complaints.length) {

>>>>>>> 24865f64e2e9dfa854510cce2d30ba63ab389e3f
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
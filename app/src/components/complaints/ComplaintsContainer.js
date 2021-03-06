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

			isLogged: state.isLogged,
			user: state.userStuff.user,
			logErr: state.logErr,
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
		};
		this.changeView = this.changeView.bind(this);
		this.getMore=this.getMore.bind(this);
		this.getMoreButton=this.getMoreButton.bind(this);
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

	getMore(e) {
		e.preventDefault();
		const pag = (this.props.complaints.length / 10) + 1;
		this.props.fetchGetMoreComplaints(`/reclamos/${pag}`);
	}

	getMoreButton() {
		if (this.props.complaints[this.props.complaints.length-1] !== 'end') {
			return (
				<div>
					<button onClick={this.getMore} style={{'margin': '50px 0px'}}>
						Ver más
					</button>
				</div>
			);
		}
	}

	render() {
		let view = this.state.view;
		if (view === 'complaintsForm') {
			return (
				<div id={s.toRuleThemAll}>
				<Row>
					<Col md={3} lg={2}/>
					<Col md={8} lg={8}>
						<div id={s.createButtonBar}>
							<button onClick={ this.changeView } className='complaintsList' id={s.createButton}>Cerrar</button>
						</div>
							<ComplaintsCreateForm  />
						<div>

							{ this.props.complaints.map((complaint, i) => <SingleComplaintWithComments {...this.props} user={this.props.userStuff.user} key={i} i={i} complaint={complaint} /> ) }
							{this.getMoreButton()}

						</div>
					</Col>
				</Row>
				</div>
			)
		} else if ( view === 'complaintsList' && !this.props.complaints.length ) {
		return (
			<div id={s.toRuleThemAll}>
			<Row>
				<Col md={3} lg={2}/>
				<Col md={8} lg={8}>
					<div id={s.createButtonBar}>
						<button onClick={ this.changeView } className='complaintsForm' id={s.createButton}>Crear Reclamo</button>
					</div>
					<div className={s.noComplaints}><p>No hay reclamos para mostrar.</p></div>
				</Col>
			</Row>
			</div>
		)} else if ( view === 'complaintsForm' && !this.props.complaints.length ) {
			return (
				<div id={s.toRuleThemAll}>
				<Row>
					<Col md={3} lg={2}/>
					<Col md={8} lg={8}>
						<div id={s.createButtonBar}>
							<button onClick={ this.changeView } className='complaintsList' id={s.createButton}>Cerrar</button>
						</div>
						<ComplaintsCreateForm id={s.form}  />
						<div className={s.noComplaints}><p>No hay reclamos para mostrar.</p></div>
					</Col>
				</Row>
				</div>
			)
		}
		return (
			<div id={s.toRuleThemAll}>
			<Row>
				<Col md={3} lg={2}/>
				<Col md={8} lg={8}>
						<div id={s.createButtonBar}>
							<button onClick={ this.changeView } className='complaintsForm' id={s.createButton}>Crear Reclamo</button>
						</div>
						<div>
							{ this.props.complaints.map((complaint, i) => <SingleComplaintWithComments user={this.props.userStuff.user} {...this.props} key={i} i={i} complaint={complaint} /> ) }
							{this.getMoreButton()}
						</div>
				</Col>
			</Row>
			</div>

			)
	}
}

import React from 'react';
import ReactDOM from 'react-dom';
import ComplaintCreateForm from './ComplaintCreateForm';
import ComplaintsList from './ComplaintsList';
import Fetching from '../elements/Fetching';
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
		},
		complaints: state.complaints,
		other: {
			isFetching: state.isFetching,
			failedToFetch: state.failedToFetch,
			error: state.error
		}
	};
}

class ComplaintsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.viewList = this.viewList.bind(this);
		this.viewForm = this.viewForm.bind(this);
	}

	componentWillMount() {
		this.props.fetchGetComplaints();

	}
	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.formView).style.display='none';
	}

	viewList() {
		if(!this.props.complaints.length) {
			ReactDOM.findDOMNode(this.refs.message).style.display='inline-block';
			ReactDOM.findDOMNode(this.refs.formView).style.display='none';
			ReactDOM.findDOMNode(this.refs.listView).style.display='none';
			ReactDOM.findDOMNode(this.refs.formButton).classList.toggle(s.linkButton, true);
			ReactDOM.findDOMNode(this.refs.formButton).classList.toggle(s.titleButton, false);
			ReactDOM.findDOMNode(this.refs.listButton).classList.toggle(s.titleButton, true);
			ReactDOM.findDOMNode(this.refs.listButton).classList.toggle(s.linkButton, false);
		};
		ReactDOM.findDOMNode(this.refs.message).style.display='none';
		ReactDOM.findDOMNode(this.refs.formView).style.display='none';
		ReactDOM.findDOMNode(this.refs.listView).style.display='inline-block';
		ReactDOM.findDOMNode(this.refs.formButton).classList.toggle(s.linkButton, true);
		ReactDOM.findDOMNode(this.refs.formButton).classList.toggle(s.titleButton, false);
		ReactDOM.findDOMNode(this.refs.listButton).classList.toggle(s.titleButton, true);
		ReactDOM.findDOMNode(this.refs.listButton).classList.toggle(s.linkButton, false);
	}

	viewForm() {
		ReactDOM.findDOMNode(this.refs.message).style.display='none';
		ReactDOM.findDOMNode(this.refs.formView).style.display='inline-block';
		ReactDOM.findDOMNode(this.refs.listView).style.display='none';
		ReactDOM.findDOMNode(this.refs.formButton).classList.toggle(s.titleButton, true);
		ReactDOM.findDOMNode(this.refs.formButton).classList.toggle(s.linkButton, false);
		ReactDOM.findDOMNode(this.refs.listButton).classList.toggle(s.linkButton, true);
		ReactDOM.findDOMNode(this.refs.listButton).classList.toggle(s.titleButton, false);
	}

	render() {
		if(this.props.other.isFetching) {
			return (
				<Row>
					<Col md={2} lg={2}/>
					<Col md={6} lg={6}>
						<div className={s.complaintsContainer}>
							<div className={s.complaintsViewButtons}>
								<button className={s.linkButton} ref='listButton'>Ver Todos</button>
								<button className={s.linkButton} onClick={this.viewForm} ref='formButton'>Crear Reclamo</button>
							</div>
							<div>
								<Fetching />
							</div>
						</div>
					</Col>
				</Row>
			)
		} else if (!this.props.complaints.length) {
			return(
				<Row>
					<Col md={2} lg={2}/>
					<Col md={6} lg={6}>
						<div className={s.complaintsContainer}>
							<div className={s.complaintsViewButtons}>
								<button className={s.titleButton} onClick={this.viewList} ref='listButton'>Ver Todos</button>
								<button className={s.linkButton} onClick={this.viewForm} ref='formButton'>Crear Reclamo</button>
							</div>
							<div>
								<p ref='message' className={s.message}>No hay reclamos para mostrar.</p>
								<ComplaintsList {...this.props} className={s.hidden} ref='listView' />
								<ComplaintCreateForm {...this.props} className={s.hidden} ref='formView'/>
							</div>
						</div>
					</Col>
				</Row>
		)}
		return (

			<Row>
				<Col md={2} lg={2}/>
				<Col md={6} lg={6}>
					<div className={s.complaintsContainer}>
						<div className={s.complaintsViewButtons}>
							<button className={s.titleButton} onClick={this.viewList} ref='listButton'>Ver Todos</button>
							<button className={s.linkButton} onClick={this.viewForm} ref='formButton'>Crear Reclamo</button>
						</div>
						<div className={s.complaintsViewsDiv}>
							<ComplaintsList {...this.props} className={s.listView} ref='listView' />
							<ComplaintCreateForm {...this.props} ref='formView'/>
						</div>
					</div>
				</Col>
			</Row>

			);
		}
	}


export default connect(mapStateToProps, mapDispatchToProps)(ComplaintsContainer);

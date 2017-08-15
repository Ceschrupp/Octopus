import React from 'react';
import Dropzone from 'react-dropzone';
import { Container, Row, Col } from 'react-grid-system';
import * as actionCreators from '../../redux/actions/actionCreators.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const s = require('./styles/ComplaintCreateForm.scss');
const moment = require('moment');

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

export default class ComplaintCreateForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onDrop = this.onDrop.bind(this);
		this.remove = this.remove.bind(this);
		let submitted = 0;

		this.state= {
			title: '',
			body: '',
			initiateComplaintDate: moment().locale('es').format('D MMMM YYYY, ha'),
			files: [],
			submitted: 0,
			isPrivate:'',
			state: 'Abierto',
		};
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
		this.refs.checkbox.value = this.refs.checkbox.checked ? 1 : 0;
		this.setState({
			isPrivate: this.refs.checkbox.value})
	}
		
	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			submitted: 1
		})
		this.props.fetchSendComplaint(this.state);

	}

	onDrop(files) {
		let filesToUpload = Object.assign([], files)
		this.setState({
			files: filesToUpload
		});
	}


	remove(event) {
		event.preventDefault();
		let filesToUpload = Object.assign([], this.state.files);
		filesToUpload.splice(event.target.id, 1);
		this.setState({
			files:filesToUpload
		})
	}

	render() {
		if ( this.state.submitted === 1 ) {
			return (
				<Row>
					<Col md={3} lg={0}/>
					<Col md={8} lg={8}>
						<div className={s.sent}>
							<p>Su reclamo ha sido enviado.</p>
						</div>
					</Col>
				</Row>
			)
		}
		return (
			<Row>
				<Col md={3} lg={0}/>
				<Col md={8} lg={8}>
				<div className={s.ComplaintsFormDiv}>
					<form onSubmit={ this.handleSubmit } encType='multipart/form-data' id='dropzoneFormId' className={s.ComplaintForm} >
						<input form='dropzoneFormId' placeholder='Asunto' name='title' onChange={ this.handleChange } value={ this.state.value } onSubmit={ this.handleSubmit } className={s.ComplaintSubject} required />
						<textarea className={s.ComplaintTextArea} form='dropzoneFormId'	placeholder='Comentarios' name='body'	onChange={ this.handleChange } value={ this.state.value } required />
						<section className={s.DropzoneSection} >
							<Dropzone form='dropzoneFormId' id='dropzoneId' onDrop={ this.onDrop } ref='dropzoneId' accept='image/jpg,image/jpeg,image/png' className={s.Dropzone} multiple={true}>
								<label htmlFor='dropzoneId'>Arrastrá un archivo JPG/PNG aquí o hacé click para elegir uno.</label>
							</Dropzone>
							<aside className={s.SelectedFilesAside} >
	         					<ul className={s.List}>
	            				{ this.state.files.map(f => <li key={f.name} ><img src={f.preview} height='80' width='80'/><a href='' onClick={ this.remove } id={f.name}>Eliminar</a></li>) }
	          					</ul>
	          				</aside>
	          				<div className={s.PrivateComplaint}>
							<input form='dropzoneFormId' type='checkbox' id='privateCheckbox' onChange={ this.handleChange } ref='checkbox' />
							<label htmlFor='privateCheckbox'>Este reclamo es privado.</label>
							</div>
							<input type='submit' value='Enviar' className={s.SendButton} />
						</section>
					</form>
				</div>
				</Col>
			</Row>


			)}

	}
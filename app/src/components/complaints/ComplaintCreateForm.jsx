import React from 'react';
// import { Link } from 'react-router';
// import Dropzone from 'react-dropzone';
// import FileUploadBox from '../elements/FileUploadBox';
// import SubmitButton from '../elements/SubmitButton';
const s = require('./styles/ComplaintCreateForm.scss');
// const s = require('./styles/ComplaintsContainer.scss');
import { Container, Row, Col } from 'react-grid-system';
const moment = require('moment');
const DropzoneJs = require('../../utilities/dropzone.js');

export default class ComplaintCreateForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
			initiateComplaintDate: moment().locale('es').format('D MMMM YYYY, ha'),
			files: [],
			state: 'Abierto',
			// building_id: this.state.userStuff.building.building_id,
		};
		this.handleChange = this.handleChange.bind(this);
		// this.onDrop = this.onDrop.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		DropzoneJs.options.dropzoneId={
			paramName: 'files',
			maxFileSize: 4,
			url: '/crear-reclamo',
			withCredentials: true,
			parallelUploads: 2,
			uploadMultiple: true,
			maxFiles: 3,
			acceptedFiles: 'image/jpeg, image/jpg, image/png',
			dictDefaultMessage: 'Arrastre archivos aquí o haga click para elegir uno.',
			dictFileTooBig: 'Ël archivo es demasiado grande ({{filesize}}MiB), el máximo permitido es:{{maxFilesize}}MiB.',
			dictInvalidFileType: 'El archivo debe tener extensión JPG o PNG.'
			// init: function() {
			// 	const thisDropzone = this;
			// 	thisDropzone.files.push(ex)
			// 	thisDropzone.options.thumbnail.call(thisDropzone, ex, 'back dir'+value.name)
			// }
		}
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	// onDrop(files) {
	// 	this.setState({
	// 		files
	// 	});
	// }

	handleSubmit(e) {
		e.preventDefault();
		this.props.fetchSendComplaint(this.state);
		console.log(this.state)
	}
	
	//https://github.com/okonet/react-dropzone/blob/master/src/index.js#L98
						// <h3 className={s.CreateComplaintTitle}>Crear reclamo</h3>
	//HACERLO CHIQUItO Y CUANDO APRETAS SALE EL FORM

	render() {
		return (
			<Row>
				<Col md={3} lg={3}/>
				<Col md={6} lg={6}>
					<div className={s.ComplaintsFormDiv}>

	
						<form className={s.ComplaintForm, 'dropzone'} onSubmit={this.handleSubmit} id='dropzoneId' >

							<label htmlFor="title"></label>
							<input
								onChange={this.handleChange}
								name='title'
								className={s.ComplaintSubject}
								value={this.state.title}
								placeholder='Asunto *'
								required
							/>
							<textarea
								name='body'
								placeholder='Comentarios *'
								onChange={this.handleChange}
								value={this.state.body}
								id='complaintTextArea'
								className={s.ComplaintTextArea}
								required 
							/>
							<div className='fallback'></div>

						</form>
							<input className={s.SendButton} disabled={!this.state.title || !this.state.body} type='submit' />
					</div>
				</Col>
			</Row>
		);
	}
}

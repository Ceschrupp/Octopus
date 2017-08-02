import React from 'react';
import { Link } from 'react-router';
import SubmitButton from '../elements/SubmitButton';
import FileUploadBox from '../elements/FileUploadBox';
const moment = require('moment');
import Dropzone from 'react-dropzone';
const s = require('./styles/ComplaintCreateForm.scss');

export default class ComplaintCreateForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
			initiateComplaintDate: moment().locale('es').format('D MMMM YYYY, ha'),
			files: [],
			state: 'Abierto',
			//building_id: this.props.userStuff.building_id, ????
			user_id: this.props.userStuff.user//.user_id
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	onDrop(files) {
		this.setState({
			files
		});
	}

	handleSubmit(e) {
		this.props.fetchSendComplaint(this.state);
		e.preventDefault();
	}

	//https://github.com/okonet/react-dropzone/blob/master/src/index.js#L98
	//HACERLO CHIQUItO Y CUANDO APRETAS SALE EL FORM
	render() {
		return (
			<div id={s.container}>
				<form id={s.form} className='complaintForm' onSubmit={this.handleSubmit}>
					<label htmlFor="title">Asunto: </label>
					<input 
						onChange={this.handleChange} 
						name='title'
						id="title"
						value={this.state.title}
					/>
					<textarea 
						name='body'
						className='ComplaintTextArea' 
						placeholder='Ingrese comentarios aquí'
						onChange={this.handleChange}
						value={this.state.body}
						id="body"
					/>
					<section>
						<div className="dropzone">
							<Dropzone onDrop={this.onDrop.bind(this)}>
								<p>Arrastrá un archivo o hacé click aquí para elegir uno.</p>
							</Dropzone>
						</div>
						<aside>
							<h2>Dropped files</h2>
							<ul>
								{this.state.files.map(f => <li>{f.name} - {f.size} bytes</li>)}
							</ul>
						</aside>
					</section>
					<input disabled={!this.state.title || !this.state.body} type="submit" />
				</form>
			</div>
		);
	}
}

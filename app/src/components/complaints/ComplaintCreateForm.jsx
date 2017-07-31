import React from 'react';
import { Link } from 'react-router';
import SubmitButton from '../elements/SubmitButton';
import FileUploadBox from '../elements/FileUploadBox';
const moment = require('moment');

export default class ComplaintsContainer extends React.Component {

	constructor(props) {
		super(props);
		this.submitComplaint=this.submitComplaint.bind(this);
	}

	submitComplaint(e) {
		e.preventDefault();
		const newComplaint = {
			title: this.refs.Title.value,
			body: this.refs.textContent.value,
			initiateComplaintDate: moment().locale('es').format('D MMMM YYYY, ha'),//MOMENT CONFIGURAR
			files: '(sólo imágenes, en base 64)',
			state: 'Abierto',
			building_id: '',
			user_id: this.props.userStuff.user.user_id
		};
		this.props.fetchSendComplaint(newComplaint);
		this.refs.complaintForm.reset();
	}

	//https://github.com/okonet/react-dropzone/blob/master/src/index.js#L98
	//HACERLO CHIQUItO Y CUANDO APRETAS SALE EL FORM
	render() {
		return (
			<div>
				<form className='complaintForm' ref='complaintForm'>
					<input className='complaintInput' placeholder='Asunto' ref='Title'></input>
					<textarea className='ComplaintTextArea' placeholder='Ingrese comentarios aquí' ref='textContent'></textarea>
					<FileUploadBox />
					<SubmitButton onClick={this.submitComplaint} />
				</form>
			</div>
		);
	}
}

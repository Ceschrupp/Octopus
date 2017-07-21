import React from 'react';
import {Link} from 'react-router';
import UploadBox from '../components/elements/fileUploadBox';

export default class ComplaintsContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		<div className='complaintsContainer'>
			<input className='complaintInput' placeholder='Asunto'></input>
			<textarea className='ComplaintTextArea' placeholder='Ingrese comentarios aquí'></textarea>
			<UploadBox />
			<SubmitButton onclick=''/>
		</div>
	}
}
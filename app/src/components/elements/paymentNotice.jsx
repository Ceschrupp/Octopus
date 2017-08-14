import React from 'react';
const s = require('./paymentNotice.scss');
import { Container, Row, Col } from 'react-grid-system';

export default class paymentNotice extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		const file = this.fileUpload.files[0];
		const notice= {
			user:this.props.userStuff.user.username,
			message:this.refs.paymentNoticeMessage.value,
			file:file,
		}
	}
	render () {
		return (
			<Row>
			<Col md={3} lg={3}/>
				<Col md={6} lg={6}>
					<div className={s.paymentNotice}>
						<form className='paymentNoticeForm' onSubmit={(ref) => this.handleSubmit = ref}>
							<h3>Informar un pago:</h3>
							<input className= {s.fileInput} placeholder='Mensaje de aviso' type='text' ref='paymentNoticeMessage' />
							<label className={s.fileContainer}>
								Elige un archivo
							<input className={s.chooseFile}type="file" id="paymentNoticeFile" accept=".jpg, .jpeg, .png" multiple ref='paymentNoticeFile' />
							</label>
						<button className={s.sendButton}type='submit'>Enviar</button>
					</form>
				</div>
			</Col>
		</Row>
			)}
}

import React from 'react';

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
				<div className='paymentNotice'>
					<form className='paymentNoticeForm' onSubmit={(ref) => this.handleSubmit = ref}>
						<h3>Informar un pago:</h3>
						<input type='text' ref='paymentNoticeMessage' />
						<input type="file" id="paymentNoticeFile" accept=".jpg, .jpeg, .png" multiple ref='paymentNoticeFile' />
						<button type='submit'>Enviar</button>
					</form>
				</div>
			)}
}

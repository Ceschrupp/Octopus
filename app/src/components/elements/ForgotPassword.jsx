import React from 'react';

export default class ForgotPassword extends React.Component {
	constructor(props) {
		super(props);
	this.handleSubmit=this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.fetchForgotPass({email:this.refs.resetPasswordRequest.value});
		this.refs.ForgotPassword.reset();
		hashHistory.push('/');
	}
	render () {
		if (this.handleSubmit) {
			return(
				<p className='ForgotPasswordMessage'>Recibirá un E-Mail a la brevedad.</p>
		)}
		return(
		<div className='ForgotPassword'>
			<form type='submit' ref='ForgotPassword' onSubmit={this.handleSubmit} className='ForgotPasswordForm'>
				<input className='ForgotEmail' placeholder='E-Mail' ref='resetPasswordRequest'/>
				<button className='ForgotButton' type='submit'>Enviar</button>
			</form>
		</div>
	)}
}
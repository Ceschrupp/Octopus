import React from 'react';

export default class ForgotPasswordForm extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		<div className='ForgotPassword'>
			<Form className='ForgotPasswordForm'>
				<input className='ForgotEmail' placeholder='E-Mail' />
				<Button className='ForgotButton' type='submit' onclick=''>Enviar</Button>
			</Form>
		</div>
	}
}
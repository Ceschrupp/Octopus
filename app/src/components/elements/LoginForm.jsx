import React from 'react';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		<div className='LoginForm'>
			<Form className='loginForm'>
				<input className='loginEmail' placeholder='E-Mail' />
				<input className='loginPassword' placeholder='Clave' />
				<Button className='loginButton'>Iniciar Sesión</Button>
				<p className='loginForgot'>¿Olvidaste tu Clave?</p>
			</Form>
		</div>
	}
}
import React from 'react';
import {Link} from 'react-router';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		<div className='LoginForm'>
			<Form className='loginForm'>
				<input className='loginEmail' placeholder='E-Mail' />
				<input className='loginPassword' placeholder='Clave' />
				<Button className='loginButton' type='submit'>Iniciar Sesión</Button>
				<Link to='/olvide-clave'><p className='loginForgot'>¿Olvidaste tu Clave?</p></Link>
			</Form>
		</div>
	}
}
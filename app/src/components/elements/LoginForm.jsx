import React from 'react';
import {Link} from 'react-router';
import CompleteInfo from './CompleteInfo';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.login=this.login.bind(this);
	},
	login(e) {
		e.preventDefault();
		this.props.fetchLogUser({email:e.target.loginEmail.value, password: e.target.loginPassword.value});
		if (this.props.userStuff.isLogged) {
			this.props.location.pathname = '/';
			} else {
				this.refs.errorField.value = '';
//populate with whatever auth error
			}
		}
	}
	render () {
		if (this.login && (!e.target.loginEmail.value || !e.target.loginPassword.value)) {
			return (
				<div className='IncompleteInfoView'>
					<p ref='errorField'>Por favor, completar E-Mail y clave.</p>
					<Form ref='loginForm' className='loginForm'>
						<input ref='loginEmail' className='loginEmail' name='loginEmail' placeholder='E-Mail' />
						<input ref='loginPassword' className='loginPassword' name='loginPassword' placeholder='Clave' />
						<Button className='loginButton' type='submit' onClick={this.login}>Iniciar Sesión</Button>
						<Link to='/olvide-clave'><p className='loginForgot'>¿Olvidaste tu Clave?</p></Link>
					</Form>
				</div>
				)
		} else {
			return (
				<div className='LoginForm'>
					<Form ref='loginForm' className='loginForm'>
						<input ref='loginEmail' className='loginEmail' name='loginEmail' placeholder='E-Mail' />
						<input ref='loginPassword' className='loginPassword' name='loginPassword' placeholder='Clave' />
						<Button className='loginButton' type='submit' onClick={this.login}>Iniciar Sesión</Button>
						<Link to='/olvide-clave'><p className='loginForgot'>¿Olvidaste tu Clave?</p></Link>
					</Form>
				</div>
			)}
	}
}
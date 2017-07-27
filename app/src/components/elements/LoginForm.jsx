import React from 'react';
import {Link} from 'react-router';
import CompleteInfo from './CompleteInfo';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.fetchLogUser({email:e.target.loginEmail.value, password: e.target.loginPassword.value});
			}

	
	componentDidMount() {
		if (this.props.userStuff.isLogged) {
			this.props.location.pathname = '/dashboard';
		} else {
			this.props.refs.logErr.value=this.props.userStuff.logErr;
		}
		this.forceUpdate();
	}
	render () {
			return (
				<div className='LoginForm'>
					<form ref='loginForm' className='loginForm' onSubmit={this.handleSubmit}>
						<span ref='errorMessage' className='errorMessage'></span>
						<input ref='loginEmail' className='loginEmail' name='loginEmail' placeholder='E-Mail' required />
						<input ref='loginPassword' type='password' className='loginPassword' name='loginPassword' placeholder='Clave' required />
						<button className='loginButton' type='submit' onClick={this.onSubmit}>Iniciar Sesión</button>
						<Link to='/olvide-clave'><p className='loginForgot'>¿Olvidaste tu Clave?</p></Link>
					</form>
				</div>
			)}
	}

import React from 'react';
import {Link} from 'react-router';
const s = require('./LoginForm.scss');

export default class Login extends React.Component {
	constructor(props) {
		super(props);
<<<<<<< HEAD
		this.login=this.login.bind(this);
	},
=======
		this.handleSubmit=this.handleSubmit.bind(this);
	}
>>>>>>> sol
	handleSubmit(e) {
		e.preventDefault();
		this.props.fetchLogUser({email:e.target.loginEmail.value, password: e.target.loginPassword.value});
			}

<<<<<<< HEAD
	}
	componentDidMount() {
		if (this.props.userStuff.isLogged) {
			this.props.location.pathname = '/dashboard'
		} else {
			this.refs.errorField.value = '';

=======

	componentDidMount() {
		if (this.props.userStuff.isLogged) {
			this.props.location.pathname = '/dashboard';
		} else {
			this.props.refs.logErr.value=this.props.userStuff.logErr;
>>>>>>> sol
		}
		this.forceUpdate();
	}
	render () {
			return (
<<<<<<< HEAD
				<div className='LoginForm'>
					<Form ref='loginForm' className='loginForm' >
						<input ref='loginEmail' className='loginEmail' name='loginEmail' placeholder='E-Mail' required />
						<input ref='loginPassword' className='loginPassword' name='loginPassword' placeholder='Clave' required />
						<Button className='loginButton' type='submit' onClick={this.login}>Iniciar Sesión</Button>
						<Link to='/olvide-clave'><p className='loginForgot'>¿Olvidaste tu Clave?</p></Link>
					</Form>
=======
				<div className={s.LoginForm}>
					<form ref='loginForm' className='loginForm' onSubmit={this.handleSubmit}>
						<span ref='errorMessage' className='errorMessage'></span>
						<input ref='loginEmail'  className={['loginEmail',s.loginEmail].join(' ')}  name='loginEmail' placeholder='E-Mail' required />
						<input ref='loginPassword' type='password'className={['loginPassword',s.loginPassword].join(' ')}name='loginPassword' placeholder='Clave' required />
						<button className={['loginButton',s.loginButton].join(' ')} type='submit' onClick={this.onSubmit}>Iniciar Sesión</button>
						<Link to='/olvide-clave'><p className={['loginForgot',s.loginForgot].join(' ')}>¿Olvidaste tu Clave?</p></Link>
					</form>
>>>>>>> sol
				</div>
			)}
	}

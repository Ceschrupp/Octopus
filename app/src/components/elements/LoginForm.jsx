import React from 'react';
import {Link} from 'react-router';
import CompleteInfo from './CompleteInfo';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.login=this.login.bind(this);
	},
	handleSubmit(e) {
		e.preventDefault();
		this.props.fetchLogUser({email:e.target.loginEmail.value, password: e.target.loginPassword.value});
			}

	}
	componentDidMount() {
		if (this.props.userStuff.isLogged) {
			this.props.location.pathname = '/dashboard'
		} else {
			this.refs.errorField.value = '';

		}
	}
	render () {
			return (
				<div className='LoginForm'>
					<Form ref='loginForm' className='loginForm' >
						<input ref='loginEmail' className='loginEmail' name='loginEmail' placeholder='E-Mail' required />
						<input ref='loginPassword' className='loginPassword' name='loginPassword' placeholder='Clave' required />
						<Button className='loginButton' type='submit' onClick={this.login}>Iniciar Sesión</Button>
						<Link to='/olvide-clave'><p className='loginForgot'>¿Olvidaste tu Clave?</p></Link>
					</Form>
				</div>
			)}
	}
}
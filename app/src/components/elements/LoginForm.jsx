import React from 'react';
import { Link } from 'react-router';
const s = require('./LoginForm.scss');
import { Container, Row, Col } from 'react-grid-system';

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
			this.refs.errorMessage.value=this.props.userStuff.logErr;
		}
		this.forceUpdate();
	}

	render () {
		return (
			<Row>
				<Col md={3} lg={4}/>
				<Col md={6} lg={4}>
					<div className={s.LoginForm}>
						<form ref='loginForm' className='loginForm' onSubmit={this.handleSubmit}>
							<span ref='errorMessage' className='errorMessage'></span>
							<input ref='loginEmail'  className={['loginEmail',s.loginEmail].join(' ')}  name='loginEmail' placeholder='E-Mail' required />
							<input ref='loginPassword' type='password'className={['loginPassword',s.loginPassword].join(' ')}name='loginPassword' placeholder='Clave' required />
							<button className={['loginButton',s.loginButton].join(' ')} type='submit' onClick={this.onSubmit}>Iniciar Sesión</button>
							<Link to='/olvide-clave'><p className={['loginForgot',s.loginForgot].join(' ')}>¿Olvidaste tu Clave?</p></Link>
						</form>
					</div>
				</Col>
			</Row>
		);
	}
}

import React from 'react';
import { Link } from 'react-router';
const s = require('./LoginForm.scss');
import { Container, Row, Col } from 'react-grid-system';
import Fetching from './Fetching';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit=this.handleSubmit.bind(this);
	}


	handleSubmit(e) {
		console.log('HOLAAAAAAA');
		e.preventDefault();
		this.props.fetchLogUser({
			email:e.target.loginEmail.value,
			password: e.target.loginPassword.value
		});
	}

	componentDidMount() { 	//////////////////////////////MMMMM ESTO NO SIrve AMeo
		console.log('MMMM')
		if (this.props.userStuff.isLogged) {
			this.props.location.pathname = '/dashboard';
		}
		this.forceUpdate();
	}

	renderAlert() {
		if(this.props.userStuff.logErr || this.props.other.failedToFetch) {
			return (
				<div>
					<span>{this.props.userStuff.logErr || this.props.other.failedToFetch}</span>
				</div>
			);
		}
	}

	render () {
		if (this.props.other.isFetching) {
			return (
				<div>
					<Fetching />
				</div>
			);
		}
		return (
			<Row>
				<Col md={3} lg={4}/>
				<Col md={6} lg={4}>
					<div className={s.LoginForm}>
						<div>{this.renderAlert()}</div>
						<form className='loginForm' onSubmit={this.handleSubmit} >
							<input
								ref='loginEmail'
								className={['loginEmail',s.loginEmail].join(' ')}  
								name='loginEmail' placeholder='E-Mail' 
								required 
							/>
							<input
								ref='loginPassword'
								type='password'
								className={['loginPassword',s.loginPassword].join(' ')} 
								name='loginPassword' 
								placeholder='Clave' 
								required 
							/>
							<input className={['loginButton',s.loginButton].join(' ')} type='submit' value='Iniciar Sesión'/>
						</form>
						<Link to='/olvide-clave'><p className={['loginForgot',s.loginForgot].join(' ')}>¿Olvidaste tu Clave?</p></Link>
					</div>
				</Col>
			</Row>
		);
	}
}

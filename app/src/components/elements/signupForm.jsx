import React, { Component, PropTypes } from 'react';
import { Container, Row, Col } from 'react-grid-system';
const s = require('./signupForm.scss');
require('./hola.css');

export default class SignupForm extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			email: '',
			username: '',
			password: '',
		};
		this.handleSubmit=this.handleSubmit.bind(this);
		this.onChange=this.onChange.bind(this);
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value});
	}
	handleSubmit(e) {
		e.preventDefault();
		const newUser = this.state;
		this.props.fetchRegisterUser(newUser);
	}
	render() {
		return (
			<Row>
				<Col md={3} lg={4}/>
				<Col md={6} lg={4}>
					<div className={s.signupDiv}>
						<h3 className={['signupFormTitle',s.signupFormTitle].join(' ')}>REGISTRATE</h3>
						<form className='signupForm' onSubmit={this.handleSubmit}>
							<input placeholder='E-Mail' className={['signupEmail',s.signupEmail].join(' ')} type='text' ref='email' name='email' onChange={this.onChange} value={this.state.email}/><br />
							<input placeholder='Usuario'className={['signupUser',s.signupUser].join(' ')} type='text' ref='username' name='username' onChange={this.onChange} value={this.state.username} /><br />
							<input placeholder='Clave'className={['signupPassword',s.signupPassword].join(' ')} type='text' ref='password' name='password' onChange={this.onChange} value={this.state.password} /><br />
							<button className={['signupButton',s.signupButton].join(' ')} type='submit'>Enviar</button>
						</form>
					</div>
				</Col>
			</Row>
		);
	}
}

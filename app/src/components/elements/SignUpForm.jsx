import React, { Component, PropTypes } from 'react';

export default class SignupForm extends React.Component {
	constructor (props) {
		super(props);
		this.state={
			email: '',
			username: '',
			password: '',
		}
		this.handleSubmit=this.handleSubmit.bind(this);
		this.onChange=this.onChange.bind(this);
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value});
	}
	handleSubmit(e) {
		e.preventDefault();
		//const newUser = this.state;
		const registro = {
			email: this.refs.email.value,
			username: this.refs.username.value,
			password: this.refs.password.value
		}
		this.props.create(registro);
		//this.props.fetchRegisterUser(newUser);
	}
	render() {
		return (
			<div className='signupDiv'>
				<form className='signupForm' onSubmit={this.handleSubmit}>
					E-Mail:<input className='signupEmail' type='text' ref='email' name='email' onChange={this.onChange} value={this.state.email}/><br />
					Username:<input className='signupUser' type='text' ref='username' name='username' onChange={this.onChange} value={this.state.username} /><br />
					Password:<input className='signupPassword' type='text' ref='password' name='password' onChange={this.onChange} value={this.state.password} /><br />
					<button className='signupButton' type='submit'>Sign Up</button>
				</form>
			</div>
		)
	}
}
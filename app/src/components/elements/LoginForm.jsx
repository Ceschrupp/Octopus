import React from 'react';
import {Link} from 'react-router';
import CompleteInfo from './CompleteInfo';
const s = require('./LoginForm.scss');

export default class Login extends React.Component {
	constructor(props) {
		super(props);

	}

			render () {
				if (false) {
					return (
						<div className={s.LoginForm}>
							<p className={['errorField',s.errorField].join(' ')} ref='errorField'>Por favor, completar E-Mail y clave.</p>
							<form ref='loginForm' className='loginForm'>
								<input ref='loginEmail'  className={['loginEmail',s.loginEmail].join(' ')} name='loginEmail' placeholder='E-Mail' />
								<input ref='loginPassword' className={['loginPassword',s.loginPassword].join(' ')} name='loginPassword' placeholder='Clave' />
								<button className={['loginButton',s.loginButton].join(' ')} type='submit' onClick={this.login}>Iniciar Sesión</button>
								<Link to='/olvide-clave'><p className='loginForgot'>¿Olvidaste tu Clave?</p></Link>
							</form>
						</div>
						)
				} else {
					return (
						<div className={s.LoginForm}>
							<form ref='loginForm' className='loginForm'>
								<input ref='loginEmail' className={['loginEmail',s.loginEmail].join(' ')} name='loginEmail' placeholder='E-Mail' />
								<input ref='loginPassword' className={['loginPassword',s.loginPassword].join(' ')}name='loginPassword' placeholder='Clave' />
								<button className={['loginButton',s.loginButton].join(' ')} type='submit' onClick={this.login}>Iniciar Sesión</button>
								<Link to='/olvide-clave'><p className={['loginForgot',s.loginForgot].join(' ')}>¿Olvidaste tu Clave?</p></Link>
							</form>
						</div>
					)}
			}
}

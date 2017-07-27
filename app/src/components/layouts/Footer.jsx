import React from 'react';
import {Link} from 'react-router';
import { Container, Row, Col } from 'react-grid-system';

export default class Footer extends React.Component {
	constructor (props) {
		super(props);
		console.log('footer',props);
	}
	render () {
		return (
		<Row>
			<Col md={3} lg={4}/>
			<div className='footerDiv'>
				<div className='copyrightDiv'>
					<p className='copyright'>© 2017 Octopus - Todos los derechos reservados.</p>
				</div>
				<div className='termsAndPrivacy'>
					<Link to='/terminos-y-condiciones' className='termsAndConditions'>Términos y Condiciones</Link>
					<p className='termsAndPrivacySeparator'> | </p>
					<Link to='/politicas-de-privacidad' className='privacyPolicy'>Políticas de Privacidad</Link>
				</div>
			</div>
		</Row>
			);
	}
}

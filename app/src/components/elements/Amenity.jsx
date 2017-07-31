import React from 'react';
const s = require('./Amenity.scss');
import { Container, Row, Col } from 'react-grid-system';

export default class AmenitieDetail extends React.Component {
	constructor(props) {
	super(props);
	}
	render () {
		return(
				<div className='AmenitieDetail'>
					<h3>Amenity:</h3><p>{this.props.booking.amenities}</p>
					<h3>Fecha de reserva:</h3><p>{this.props.booking.bookingDate}</p>
					<h3>Hora de reserva:</h3><p>{this.props.booking.time}</p>
					<h3>Comentarios:</h3><p>{this.props.booking.comments}</p>
					<p className='bookingDetailUser'>Iniciada por {this.props.booking.bookingName} el {this.props.booking.initiateBookingDate}</p>
				</div>
			)
	}
}
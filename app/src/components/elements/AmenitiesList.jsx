import React from 'react';
// import {Link} from 'react-router';
// import AmenitiesList from '../components/elements/AmenitiesList';

export default class AmenitiesList extends React.Component {
	constructor(props) {
		super(props);
	}
	viewDetails(e) {
		e.preventDefault();

//////////////////////////////////////////////////		
//ESTE ARCHIVO ESTA X LA MITAD, NO ESTA COMPLETO EL HIDDEN INPUT CON LOS DETALLES DE LA RESERVA//
/////////////////////////////////////////////////////		
	}
	render () {
		const {amenities, bookingDate, bookingName, i} = this.props
			if (this.props.uerStuff.user.username===booking.bookingName) {
				return (
						<div></div>
					)
			}
			return (
				<div className='AmenitiesList'>
					<h3>Reservas</h3>
					<ul className='AmenitiesListUl'>
						<li className='AmenitiesListItem'>{booking.amenities} reservado por {booking.bookingName} para el {booking.bookingDate}. <button onClick={this.viewDetails}>Ver detalles.</button></li>
						<input type="hidden" id={this.props.booking.id} value={this.state.} />
					</ul>
				</div>
			)
	}
}
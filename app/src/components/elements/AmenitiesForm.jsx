import React from "react";

export default class AmenitiesForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	handleSubmit() {
		const booking = {
		"initiateBookingDate": new Date(),
		"amenities":this.refs.amenities.value,
		"bookingDate":this.refs.bookingDate.value,
		"time":this.refs.time.value,
		"comments":this.refs.comments.value,
		"bookingName":this.refs.bookingName.value,
		};
		this.refs.AmenitiesForm.reset();
		this.props.fetchSendBooking(booking);
	}
	render() {
		return (
			<div className='AmenitiesFormDiv'>
				<h3 className='AmenitiesFormTitle'>Inicia una reserva:</h3>
				<form ref='AmenitiesForm' onSubmit={this.handleSubmit} className='AmenitiesForm'>
			        <input ref='amenities' type='text' placeholder='Amenities'></input>
			        <input ref='bookingDate' type='date' min="2017-07-01" placeholder='Fecha'></input>
			        <input ref='time' type='time' placeholder='Horario'></input>
			        <textarea ref='comments' rows="4" cols="50" placeholder='Comentarios'></textarea>
			        <input ref='bookingName' type='text' placeholder='Nombre y Apellido'></input>
			        <button type='submit'>Enviar</button>
        		</form>
			</div>
		);
	}
}

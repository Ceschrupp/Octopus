import React from 'react';
import { Link, hashHistory } from 'react-router';
import AmenitiesList from '../components/elements/AmenitiesList';
import AmenitiesForm from '../components/elements/AmenitiesForm';
import AmenitieDetail from '../components/elements/Amenity';


export default class Amenities extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit=this.handleSubmit.bind(this);
	}

	handleSubmit(){
		const booking = {
			'initiateBookingDate': new Date(),
			'amenities':this.refs.amenities.value,
			'bookingDate':this.refs.bookingDate.value,
			'time':this.refs.time.value,
			'comments':this.refs.comments.value,
			'bookingName':this.refs.bookingName.value,
		};
		this.refs.AmenitiesForm.reset();
		this.props.fetchEditBooking(booking);
		hashHistory.push('/ver-reservas');
	}
	componentWillMount(){
		//Busco los datos del amenity del this.props.params.amenityId
		// o sea, llamar a la accion fetchEditBooking(this.props.params.amenityId
	}
	handleSubmit(){
		const booking = {
			"initiateBookingDate": new Date(),
			"amenities":this.refs.amenities.value,
			"bookingDate":this.refs.bookingDate.value,
			"time":this.refs.time.value,
			"comments":this.refs.comments.value,
			"bookingName":this.refs.bookingName.value,
		};
		this.refs.AmenitiesForm.reset();
		this.props.fetchEditBooking(booking);
		hashHistory.push('/ver-reservas');
	}
	componentWillMount(){
	//Busco los datos del amenity del this.props.params.amenityId
	// o sea, llamar a la accion fetchEditBooking(this.props.params.amenityId
		this.refs.bookingName.value = this.props.booking.bookingName,
		this.refs.amenities.value = this.props.booking.amenities,
		this.refs.bookingDate.value = this.props.booking.bookingDate,
		this.refs.time.value = this.props.booking.time,
		this.refs.comments.value = this.props.booking.comments
	}

	render() {
		return (
			<Row>
				<Col md={3} lg={4}/>
				<Col md={6} lg={4}>
					<div className={s.AmenitiesFormDiv}>
						<h3 className={['AmenitiesFormTitle',s.AmenitiesFormTitle].join(' ')}>Inicia una reserva:</h3>
						<form ref='AmenitiesForm' onSubmit={this.handleSubmit} className='AmenitiesForm'>
							<input className={['nameInput',s.nameInput].join(' ')} ref='bookingName' type='text' placeholder='Nombre y Apellido' required></input>
							<input className={['AmenitiesInput',s.AmenitiesInput].join(' ')} ref='amenities' type='text' placeholder='Amenities'required></input>
							<input className={['bookingDate',s.bookingDate].join(' ')} ref='bookingDate' type='date' min="2017-07-01" placeholder='Fecha' required ></input>
							<input className={['timeInput',s.timeInput].join(' ')} ref='time' type='time' placeholder='Horario' required></input>
							<textarea  className={['textArea',s.textArea].join(' ')} ref='comments' rows="4" cols="50" placeholder='Comentarios'></textarea>
							<button className={['sendButton',s.sendButton].join(' ')}type='submit'>Editar</button>
						</form>
					</div>
				</Col>
			</Row>
		);
	}
}

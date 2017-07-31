import React from "react";
import {Link} from 'react-router';
const s = require('./AmenitiesForm.scss');
import { Container, Row, Col } from 'react-grid-system';

export default class AmenitiesForm extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			initiateBookingDate:'',
			amenities:'',
			bookingDate:'',
			time:'',
			comments:'',
			bookingName:'',
		}
		this.handleSubmit=this.handleSubmit.bind(this);
		this.onChange=this.onChange.bind(this);
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value});
	}
	handleSubmit(e) {
		e.preventDefault();
		const booking = this.state;
		this.props.fetchSendBooking(booking);
		this.refs.AmenitiesForm.reset();
	}
	render() {
		return (
			<Row>
				<Col md={3} lg={4}/>
				<Col md={6} lg={4}>
					<div className={s.AmenitiesFormDiv}>
						<h3 className={['AmenitiesFormTitle',s.AmenitiesFormTitle].join(' ')}>Inicia una reserva:</h3>
						<form ref='AmenitiesForm' onSubmit={this.handleSubmit} className='AmenitiesForm'>
									<input className={['nameInput',s.nameInput].join(' ')} ref='bookingName' type='text' placeholder='Nombre y Apellido' onChange={this.onChange} value={this.state.bookingName} required />
					        <input className={['AmenitiesInput',s.AmenitiesInput].join(' ')} ref='amenities' type='text' placeholder='Amenities' onChange={this.onChange} value={this.state.amenities} required />
					        <input className={['bookingDate',s.bookingDate].join(' ')} ref='bookingDate' type='date' min="2017-07-01" placeholder='Fecha' onChange={this.onChange} value={this.state.bookingDate} required />
					        <input className={['timeInput',s.timeInput].join(' ')} ref='time' type='time' placeholder='Horario' onChange={this.onChange} value={this.state.time} required/>
					        <textarea  className={['textArea',s.textArea].join(' ')} ref='comments' rows="4" cols="50" placeholder='Comentarios' onChange={this.onChange} value={this.state.comments}></textarea>
					        <Link to='/ver-reservas'><button className={['sendButton',s.sendButton].join(' ')}type='submit'>Enviar</button></Link>
		        		</form>
					</div>
				</Col>
			</Row>
		);
	}
}

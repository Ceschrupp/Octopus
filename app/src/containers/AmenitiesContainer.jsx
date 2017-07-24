import React from 'react';
import SubmitButton from '../components/SubmitButton.jsx';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.initiateBooking=this.initiateBooking.bind(this);
	},
	initiateBooking(e) {
		preventDefault(e);
		const Amenities = this.refs.Amenities.value;
		const date = this.refs.Date.value;
		const Time = this.refs.Time.value;
		const Comments= this.refs.Comments.value;
		this.props.createBooking(Amenities, date, Time, Comments);
		this.refs.AmenitiesForm.reset();
	},
	render() {
		return (
			<div>
				<Form ref='AmenitiesForm' className='AmenitiesForm'>
			        <input ref='Amenities' type='text' placeholder='Amenities'></input>
			        <input ref='Date' type='date' min="2017-07-01" placeholder='Fecha'></input>
			        <input ref='Time' type='time' placeholder='Horario'></input>
			        <textarea ref='Comments' rows="4" cols="50" placeholder='Comentarios'></textarea>
			        <SubmitButton onClick={this.initiateBooking}/>
		        </Form>
			</div>
		);
	}
};

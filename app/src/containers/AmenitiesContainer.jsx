import React from 'react';
import AmenitiesList from '../components/elements/AmenitiesList';
import AmenitiesForm from '../components/elements/AmenitiesForm';

export default class Amenities extends React.Component {
	constructor(props) {
		super(props);
<<<<<<< HEAD
		}
	componentWillMount() {
		this.props.fetchGetBookings();
=======
		this.initiateBooking=this.initiateBooking.bind(this);
<<<<<<< HEAD
		this.state = {
		amenities:this.props.amenities,
		date:this.props.date,
		time:this.props.time,
		comments:this.props.comments,
		//isEditing: false
	},
=======
	}
>>>>>>> b93baf6beef5bff73babd725103974caec7c6562
	initiateBooking(e) {
		preventDefault(e);
		const amenities = this.refs.amenities.value;
		const date = this.refs.date.value;
		const time = this.refs.time.value;
		const comments= this.refs.comments.value;
		this.refs.AmenitiesForm.reset();
<<<<<<< HEAD
		return this.setState({amenities, date, time, comments});
	},
	render() {
		return (
			<div>
				<Form ref='AmenitiesForm' className='AmenitiesForm'>
			        <input ref='amenities' type='text' placeholder='Amenities'></input>
			        <input ref='date' type='date' min="2017-07-01" placeholder='Fecha'></input>
			        <input ref='time' type='time' placeholder='Horario'></input>
			        <textarea ref='comments' rows="4" cols="50" placeholder='Comentarios'></textarea>
			        <SubmitButton onClick={this.initiateBooking}/>
		        </Form>
=======
>>>>>>> sol
	}
	render() {
		if () {
		return (
			<div>
<<<<<<< HEAD
				<AmenitiesForm {...this.props}/>
=======
				
				<AmenitiesForm/>
				<SubmitButton onClick={this.initiateBooking}/>

<<<<<<< HEAD
>>>>>>> a840be2e695592c09d9e9352112554b66414be32
=======
>>>>>>> b93baf6beef5bff73babd725103974caec7c6562
>>>>>>> sol
			</div>
		)}
		return (			
			<div className='AmenitiesListDiv'>
				{this.props.bookings.map((booking, i) => <AmenitiesList {...this.props}  amenities = {booking.amenities}
					bookingDate = {booking.bookingDate} time = {booking.time} comments = {booking.comments} bookingName = {booking.bookingName} initiateBookingDate = {booking.initiateBookingDate} key={i} />)}
			</div>
	)}
};
import React from 'react';
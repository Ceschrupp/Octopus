import React from 'react';
import AmenitiesList from '../components/elements/AmenitiesList';
import AmenitiesForm from '../components/elements/AmenitiesForm';

export default class Amenities extends React.Component {
	constructor(props) {
		super(props);
<<<<<<< HEAD
=======

>>>>>>> sol
		}
	componentWillMount() {
		this.props.fetchGetBookings();
	}
	render() {
<<<<<<< HEAD
		if (this.props.location.pathname === '/reservar-amenities') {
=======
		if (this.props.location.pathname==='/reservar-amenities') {
>>>>>>> sol
		return (
			<div>
				<AmenitiesForm {...this.props}/>
			</div>
<<<<<<< HEAD
		)} else if (this.props.location.pathname === '/ver-reservas') {
			return (			
				<div className='AmenitiesListDiv'>
					{this.props.bookings.map((booking, i) => <AmenitiesList {...this.props}  amenities = {booking.amenities}
						bookingDate = {booking.bookingDate} time = {booking.time} comments = {booking.comments} bookingName = {booking.bookingName} initiateBookingDate = {booking.initiateBookingDate} key={i} />)}
				</div>
		)}
	}
=======
		)} else if (this.props.location.pathname==='/ver-reservas') {
		return (			
			<div className='AmenitiesListDiv'>
				{this.props.bookings.map((booking, i) => <AmenitiesList {...this.props}  amenities = {booking.amenities}
					bookingDate = {booking.bookingDate} time = {booking.time} comments = {booking.comments} bookingName = {booking.bookingName} initiateBookingDate = {booking.initiateBookingDate} key={i} i={i} booking={booking}/>)}
			</div>
	)}
		}
>>>>>>> sol
};

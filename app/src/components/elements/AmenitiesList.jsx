import React from 'react';
import AmenitiesList from '../components/elements/AmenitiesList';

export default class AmenitiesList extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
				<div className='AmenitiesList'>
<<<<<<< HEAD
=======
					{this.props.bookings.map((booking, i) => <AmenitiesList {...this.props}  amenities = {booking.amenities}
						bookingDate = {booking.bookingDate} time = {booking.time} comments = {booking.comments} bookingName = {booking.bookingName} initiateBookingDate = {booking.initiateBookingDate} key={i} i={i} booking={booking} />)}
>>>>>>> sol
				</div>
			)
	}
}

import React from 'react';

export default class AmenitiesList extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.fetchGetBookings();
	}
	render () {
		return (
				<div className='AmenitiesList'>
					{this.props.bookings.map((booking, i) => <AmenitiesList {...this.props}  amenities = {booking.amenities}
						bookingDate = {booking.bookingDate} time = {booking.time} comments = {booking.comments} bookingName = {booking.bookingName} initiateBookingDate = {booking.initiateBookingDate} key={i} i={i} booking={booking} />)}
				</div>
			)
	}
}

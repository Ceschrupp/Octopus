import React from 'react';
import AmenitiesList from '../components/elements/AmenitiesList';
import AmenitiesForm from '../components/elements/AmenitiesForm';

export default class Amenities extends React.Component {
	constructor(props) {
		super(props);
		}
	componentWillMount() {
		this.props.fetchGetBookings();
	}
	render() {
		if () {
		return (
			<div>
				<AmenitiesForm {...this.props}/>
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
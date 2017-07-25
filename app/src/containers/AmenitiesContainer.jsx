import React from 'react';
import SubmitButton from '../components/elements/SubmitButton.jsx';
import AmenitiesForm from '../components/elements/AmenitiesForm.jsx';

export default class AmenitiesContainer extends React.Component {
	constructor(props) {
		super(props);
		this.initiateBooking=this.initiateBooking.bind(this);
	}
	initiateBooking(e) {
		preventDefault(e);
		const Amenities = this.refs.Amenities.value;
		const date = this.refs.Date.value;
		const Time = this.refs.Time.value;
		const Comments= this.refs.Comments.value;
		this.props.createBooking(Amenities, date, Time, Comments);
		this.refs.AmenitiesForm.reset();
	}
	render() {
		return (
			<div>
				
				<AmenitiesForm/>
				<SubmitButton onClick={this.initiateBooking}/>

			</div>
		);
	}
};

import React from 'react';
import SubmitButton from '../components/elements/SubmitButton.jsx';
import AmenitiesForm from '../components/elements/AmenitiesForm.jsx';

export default class AmenitiesContainer extends React.Component {
	constructor(props) {
		super(props);
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
	}
	render() {
		return (
			<div>

				<AmenitiesForm/>
				<SubmitButton onClick={this.initiateBooking}/>

>>>>>>> b93baf6beef5bff73babd725103974caec7c6562
			</div>
		);
	}
};

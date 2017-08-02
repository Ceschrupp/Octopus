import React from 'react';
import {Link} from 'react-router';
// import AmenitiesList from '../components/elements/AmenitiesList';

const s = require('./AmenitiesList.scss');


export default class AmenitiesList extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.deleteBooking = this.deleteBooking.bind(this);
	}

	deleteBooking(){

		this.props.fetchDeleteBooking(booking);
	}

	toggle() {
		this.refs.oculto.classList.toggle(s.hidden);
		this.refs.bookingAmenities.classList.toggle('fa-plus');
		this.refs.bookingAmenities.classList.toggle('fa-minus');
	}


	render () {
		const {amenities, bookingDate, bookingName, i} = this.props
		if (this.props.userStuff.user.username === booking.bookingName) {
			return (
				// renderiza boton de borrar y editar de cada usuario
				<div className={s.panel}>
					<div className={s.heading} onClick={this.toggle}>
						<h4 className={s.title}>
							<i className="fa fa-plus" ref='bookingAmenities' onClick={this.toggle} />
							{this.props.amenities}
							<p>piscina</p>
						</h4>
						<Link to={`/reservar-amenities/edit/${this.props.booking.amenitie_id}`}>
							<button >editar</button>
						</Link>
						<button onClick={this.deleteBooking}>borrar</button>
					</div>
					<div ref='oculto' className={s.hidden}>
						<p className={s.body}>
							{this.props.amenities.bookingName}
							lolita
						</p>
						<p className={s.body}>
							{this.props.amenities.bookingDate}
							08/56/2567
						</p>
						<button onClick={this.deleteBooking}>borrar</button>
					</div>
				</div>
			);
		}
		return (
			// renderiza boton de borrar y editar de cada usuario
			<div className={s.panel}>
				<div className={s.heading} onClick={toggle}>
					<h4 className={s.title}>
						<i className="fa fa-plus" ref='bookingAmenities' onClick={this.toggle} />
						{this.props.amenities}
					</h4>
					<Link to={`reservar-amenities/edit/${this.props.booking.amenitie_id}`}>
						<button >editar</button>
					</Link>
					<button onClick={this.deleteBooking}>borrar</button>
				</div>
				<div ref='oculto' className={s.hidden}>
					<p className={s.body}>
						{this.props.amenities.bookingName}
					</p>
					<p className={s.body}>
						{this.props.amenities.bookingDate}
					</p>
					<Link to={`reservar-amenities/edit/${this.props.booking.amenitie_id}`}>
						<button >editar</button>
					</Link>
					<button onClick={this.deleteBooking}>borrar</button>
				</div>
			</div>
		);
	}
}

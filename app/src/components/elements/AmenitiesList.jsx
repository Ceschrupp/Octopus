import React from 'react';
import {Link} from 'react-router';
import { Container, Row, Col } from 'react-grid-system';
const s = require('./AmenitiesList.scss');


export default class AmenitiesList extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.deleteBooking = this.deleteBooking.bind(this);
	}

	deleteBooking(e){
		e.preventDefault();
		this.props.fetchDeleteBooking(this.props.amenitie.id);
	}

	toggle() {
		this.refs.oculto.classList.toggle(s.hidden);
		this.refs.bookingAmenities.classList.toggle('fa-plus');
		this.refs.bookingAmenities.classList.toggle('fa-minus');
	}

	render () {
		const {amenities, bookingDate, bookingName, i} = this.props
		if (true) {
			return (
				// renderiza boton de borrar y editar de cada usuario
				<Row>
					<Col md={3} lg={3}/>
					<Col md={6} lg={6}>
						<div className={s.panel}>
							<div className={s.heading} >
								<div className={s.cross}><i className="fa fa-plus" ref='bookingAmenities' onClick={this.toggle}/></div>
								<div className={s.trash} onClick={this.deleteBooking}><i className="fa fa-trash" aria-hidden="true"/></div>
								<h4 className={s.title}>
									{this.props.amenitie.amenitie}
								</h4>
								<Link className={s.pencil} to={`reservar-amenities/edit/${this.props.amenitie.booking_id}`}>
									<i className="fa fa-pencil" aria-hidden="true"></i>
								</Link>
							</div>
							<div ref='oculto' className={s.hidden}>
								<p className={s.body}>
									{this.props.amenitie.bookingName}
								</p>
								<p className={s.body}>
									{this.props.amenitie.bookingDate}
								</p>
							</div>
						</div>
					</Col>
				</Row>
			);
		}
		return (
			<Row>
				<Col md={3} lg={3}/>
				<Col md={6} lg={6}>
					<div className={s.panel}>
						<div className={s.heading} onClick={toggle}>
							<h4 className={s.title}>
								<i className="fa fa-plus" ref='bookingAmenities' onClick={this.toggle} />
								{this.props.amenitie.amenitie}
							</h4>
						</div>
						<div ref='oculto' className={s.hidden}>
							<p className={s.body}>
								{this.props.amenities.bookingName}
							</p>
							<p className={s.body}>
								{this.props.amenities.bookingDate}
							</p>
						</div>
					</div>
				</Col>
			</Row>
		);
	}
}

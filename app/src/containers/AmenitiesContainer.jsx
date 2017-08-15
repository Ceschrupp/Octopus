import React from 'react';
import AmenitiesList from '../components/elements/AmenitiesList';
import AmenitiesForm from '../components/elements/AmenitiesForm';
import AmenitieDetail from '../components/elements/Amenity';
import {Link} from 'react-router';
import { Container, Row, Col } from 'react-grid-system';
const s = require('./AmenitiesContainer.scss');

export default class Amenities extends React.Component {
	constructor(props) {
		super(props);

	}
	componentWillMount() {
		this.props.fetchGetBookings();
	}
	render() {
		if (this.props.location.pathname === '/reservar-amenities/new') {
			return (
				<div>
					<AmenitiesForm {...this.props}/>
				</div>
			);
		} else if (this.props.location.pathname==='/ver-reservas') {
			if(this.props.amenities.length !== 0) {
				return (
					<div className={s.AmenitiesListDiv}>
						<Row>
							<Col md={3} lg={3}/>
							<Col md={6} lg={6}>
								<div className={s.createBooking} ><Link to='/reservar-amenities/new' ><button className={s.linkButton}>Crear Reserva</button></Link></div>
							</Col>
						</Row>
							{this.props.amenities.map((amenitie, i) => <AmenitiesList {...this.props} key={i} i={i} amenitie={amenitie} /> )}
					</div>
				);

			} else {
				return (
					<div className='AmenitiesListDiv'>No hay reservas para mostrar en este momento...</div>
				);

			}
		}
	}
}

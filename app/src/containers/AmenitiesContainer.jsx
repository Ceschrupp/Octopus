import React from 'react';
import AmenitiesList from '../components/elements/AmenitiesList';
import AmenitiesForm from '../components/elements/AmenitiesForm';
import AmenitieDetail from '../components/elements/Amenity';

export default class Amenities extends React.Component {
	constructor(props) {
		super(props);

	}
	componentWillMount() {
		this.props.fetchGetBookings();
	}
	render() {
		if (this.props.location.pathname === '/reservar-amenities') {
			return (
				<div>
					<AmenitiesForm {...this.props}/>
				</div>
			);
		} else if (this.props.location.pathname==='/ver-reservas') {
			if(this.props.amenities.length !== 0) {
				return (
					<div className='AmenitiesListDiv'>
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

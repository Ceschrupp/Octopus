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
		return (

			<div className='AmenitiesListDiv'>
				<Link href="/reservar-amenities" ><button>Iniciá una reserva</button></Link>
				{this.props.bookings.map((booking, i) => <AmenitiesList {...this.props.amenities} key={i} i={i} booking={booking}/> )}
			</div>
		)
	}
};

// Estan pasando TODAS las props, cuando en realidad necesitan algunas nomas.

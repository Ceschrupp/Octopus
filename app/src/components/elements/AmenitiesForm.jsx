import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div>

        Amenities: <input ref='Amenities' type='text' placeholder='Amenities'></input>
        Fecha de Reserva: <input ref='Fecha' type='date' min="2017-07-01"></input>
        Horario de Reserva: <input ref='Horario' type='time' ></input>
        Comentarios: <textarea rows="4" cols="50"></textarea>

			</div>
		);
	}
}

export default Form;

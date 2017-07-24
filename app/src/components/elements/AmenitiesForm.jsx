import React from "react";

export default class AmenitiesForm extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<input ref='Amenities' type='text' placeholder='Amenities'></input>
				<input ref='Date' type='date' min="2017-07-01" placeholder='Fecha'></input>
				<input ref='Time' type='time' placeholder='Horario'></input>
				<textarea ref='Comments' rows="4" cols="50" placeholder='Comentarios'></textarea>
			</div>
		);
	}
}

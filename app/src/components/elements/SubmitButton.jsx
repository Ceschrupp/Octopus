import React from "react";

export default class SubmitButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<button className='SubmitButton' ref='button'>Enviar</button>
			</div>
		);
	}
}

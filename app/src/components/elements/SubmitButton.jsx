import React from "react";

export default class SubmitButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Button className= 'SubmitButton' ref='button' onClick=''>Enviar</Button>
			</div>
		);
	}
}

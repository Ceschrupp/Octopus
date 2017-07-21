import React from "react";

class SubmitButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Button name= 'submit' onClick=''>Enviar</Button>
			</div>
		);
	}
}

export default SubmitButton;
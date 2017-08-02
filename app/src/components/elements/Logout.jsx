import React from 'react';
import { Link } from 'react-router';

export default class Logout extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
				<div className='Logout'>
					<p>Te has deslogueado exitosamente.</p>
				</div>
			)
	}
}
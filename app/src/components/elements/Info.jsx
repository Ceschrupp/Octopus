import React from 'react';
import { Link } from 'react-router';
import UsefulInfo from './usefulInfo';

export default class Info extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h2>Datos Útiles</h2>
				{this.props.other.info.map((info, i) => <UsefulInfo {...this.props} key={i} i={i} usefulInfo={info} />)}
			</div>
		);
	}
}

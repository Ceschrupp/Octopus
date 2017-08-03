import React from 'react';
import { Link } from 'react-router';

export default class AllPayments extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='allPayments'>
				<Link to=''><h4 className='newsTitle' id={this.props.other.payments.i} >Notificacion enviada: {this.props.other.payments.i.uploadDate}</h4></Link>
			</div>
		)
	}
}
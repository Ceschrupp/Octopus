import React from 'react';
import { Link } from 'react-router';

export default class Expenses extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div>
				<h4 className='newsTitle' id={this.props.i} >{this.props.expenses.Date}</h4>
				<Link className='expenses'>{this.props.expenses.File}</Link>
			</div>
		);
	}
}

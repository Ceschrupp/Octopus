import React from 'react';
import { Link } from 'react-router';

export default class Expenses extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div className='expenses'>
				<h4 className='newsTitle' id={this.props.other.expenses.i} >{this.props.other.expenses.date}</h4>
				<Link className='expenses'>{this.props.other.expenses.file}</Link>
			</div>
		);
	}
}

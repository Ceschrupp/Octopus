import React from 'react';
import { Link } from 'react-router';

export default class Expenses extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		console.log('EXPENSES:',this.props.expenses, 'I:', this.props.i );
		return (
			<div className='expenses'>
				<h4 className='newsTitle' id={this.props.i} >{this.props.expenses.date}</h4>
				<Link className='expenses'>{this.props.expenses.file}</Link>
			</div>
		);
	}
}

import React from 'react';
import { Link } from 'react-router';

export default class latestExpenses extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
				<div className='latestExpenses'>
					<Link to='file'>{this.props.file}</Link>
					<Link to='file'></Link>
					<Link to='/expensas'>Ver Todos</Link>
				</div>
			)
	}
}

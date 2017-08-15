import React from 'react';
import { Link } from 'react-router';
import Expenses from './Expenses';

export default class latestExpenses extends React.Component {
	constructor(props) {
		super(props);
	}

	getMore(e) {
		e.preventDefault();
		const pag = (this.props.other.expenses.length / 10) + 1;
		this.props.fetchGetMoreExpenses(`/expensas/${pag}`);
	}

	getMoreButton() {
		if (this.props.other.expenses[this.props.other.expenses.length-1] !== 'end') {
			return (
				<div>
					<button onClick={this.getMore}>
						Ver más
					</button>
				</div>
			);
		}
	}

	render() {
		if (this.props.location.pathname === '/expensas'){
			
			return (
				<div>
					{this.props.other.expenses.map((expenses, i) => <Expenses {...this.props} key={i} i={i} expenses={expenses} />)}
					{this.getMoreButton()}
				</div>
			);
		} else {
			
			return (
				<div className='lastExpenses'>
					<Link to='file'>{this.props.other.expenses[0]}</Link>
					<Link to='file'></Link>
					<Link to='/expensas'>Ver Todos</Link>
				</div>
			);
		}
	}
}

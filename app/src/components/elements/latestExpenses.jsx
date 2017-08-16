import React from 'react';
import { Link } from 'react-router';
import Expenses from './Expenses';

export default class latestExpenses extends React.Component {
	constructor(props) {
		super(props);
		this.getMore=this.getMore.bind(this);
		this.getMoreButton=this.getMoreButton.bind(this);
	}

	componentWillMount() {
		if(this.props.other.expenses.length === 0) {this.props.fetchGetExpenses();}
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
					<button onClick={this.getMore} style={{'margin': '50px 0px'}}>
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
					{this.props.other.expenses.map((Expense, i) => <Expenses key={i} i={i} expenses={Expense} />)}
					{this.getMoreButton()}
				</div>
			);

		} else if (!this.props.other.expenses[0]){
			return (
				<div>Is Fetching</div>
			);	

		} else {
			return (
				<div className='lastExpenses'>
					<h2>Expensas de este Mes</h2>
					<h4 to='file'>{this.props.other.expenses[0].Date}</h4>
					<Link to='file'>{this.props.other.expenses[0].File}</Link>
					<Link to='/expensas'>Ver Todos</Link>
				</div>
			);
		}
	}
}

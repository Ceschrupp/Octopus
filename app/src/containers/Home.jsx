import React from 'react';
import { Link } from 'react-router';
import PaymentNotice from '../components/elements/paymentNotice';
import LastExpenses from '../components/elements/latestExpenses';
import LatestNews from '../components/elements/latestNews';
import UsefulInfo from '../components/elements/usefulInfo';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.fetchGetNews();
		this.props.fetchGetInfo();
	}
	render() {
		return (
			<div className='home'>
				<div className='homePaymentNotice'>
					<PaymentNotice {...this.props} />
				</div>
				<div className='homeLastExpensesDiv'>
					<LastExpenses {...this.props} />
				</div>
				<div className='homelatestNewsDiv'>
					{this.props.other.news.map((news, i) => <LatestNews {...this.props} key={i} i={i} news={news} />)}
				</div>
				<div className='homeUsefulInfoDiv'>
					{this.props.other.info.map((info, i) => <UsefulInfo {...this.props} key={i} i={i} usefulInfo={info} />)}
				</div>
			</div>
			)}
}

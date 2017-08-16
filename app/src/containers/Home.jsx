import React from 'react';
import { Link } from 'react-router';
import PaymentNotice from '../components/elements/paymentNotice';
import LastExpenses from '../components/elements/latestExpenses';
import LatestNews from '../components/elements/latestNews';
import UsefulInfo from '../components/elements/usefulInfo';
const s = require('./Home.scss');
import { Container, Row, Col } from 'react-grid-system';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.fetchGetNews();
		this.props.fetchGetInfo();
		this.props.fetchGetExpenses();
	}
	render() {
		return (

			<div className={s.home}>
				<div className={s.homePaymentNotice}>
					<PaymentNotice {...this.props} />
				</div>
				<Row>
					<Col md={3} lg={3}/>
					<Col md={6} lg={6}>
						<div className={s.homeLastExpensesDiv}>
							<LastExpenses {...this.props} />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={2} lg={2}/>
					<Col md={5} lg={5}>
						<div className={s.homelatestNewsDiv}>
							<h2>Novedades</h2>
							{this.props.other.news.map((news, i) => <LatestNews {...this.props} key={i} i={i} news={news} />)}
						</div>
					</Col>
					<Col md={3} lg={3}>
						<div className={s.homeUsefulInfoDiv}>
							<h2>Datos Útiles</h2>
							{this.props.other.info.map((info, i) => <UsefulInfo {...this.props} key={i} i={i} usefulInfo={info} />)}
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

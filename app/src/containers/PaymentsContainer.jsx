import React from 'react';

export default class Payments extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className='Payments'>
				<PaymentNotice />
				<div className='Payment'>
					{this.props.other.payments.map((payment, i) => <Payments {...this.props} key={i} i={i} payment={payment} /> )}
				</div>
			</div>
		)
	}
}
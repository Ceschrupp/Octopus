import React from 'react';

export default class usefulInfo extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
				<div className='usefulInfo'>
					<h4 className='usefulInfoTitle' id={i}>{this.props.userStuff.user.usefulInfo.title}</h4>
					<p className='usefulInfoBody'>{this.props.userStuff.user.usefulInfo.info}</p>
				</div>
			)
	}
}
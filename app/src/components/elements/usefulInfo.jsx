import React from 'react';

export default class usefulInfo extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div className='usefulInfo'>
				<h4 className='usefulInfoTitle' id={this.props.i}>{this.props.usefulInfo.Title}</h4>
				<p className='usefulInfoBody'>{this.props.usefulInfo.Body}</p>
			</div>
		);
	}
}

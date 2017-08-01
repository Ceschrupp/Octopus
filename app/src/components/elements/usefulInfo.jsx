import React from 'react';

export default class usefulInfo extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
				<div className='usefulInfo'>
					<h4 className='usefulInfoTitle' id={this.props.other.info.i}>{this.props.other.info}</h4>
					<p className='usefulInfoBody'>{this.props.other.info}</p>
				</div>
			)
	}
}

import React from 'react';

export default class LatestNews extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div className='latestNews'>
				<h4 className='newsTitle' id={this.props.news.i} >{this.props.news.Title}</h4>
				<p className='newsDate'>{this.props.news.Date}</p>
				<p className='newsBody'>{this.props.news.Body}</p>
			</div>
		);
	}
}

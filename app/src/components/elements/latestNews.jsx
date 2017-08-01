import React from 'react';

export default class LatestNews extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
				<div className='latestNews'>
					<h4 className='newsTitle' id={this.props.other.news.i} >{this.props.other.news.newsTitle}</h4>
					<p className='newsBody'>{this.props.other.news.newsBody}</p>
				</div>
			)
	}
}

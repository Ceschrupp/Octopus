import React from 'react';

export default class latestNews extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
				<div className='latestNews'>
					<h4 className='newsTitle' id={i}>{this.props.news.newsTitle}</h4>
					<p className='newsBody'>{this.props.news.newsBody}</p>
				</div>
			)
	}
}



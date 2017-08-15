import React from 'react';
import { Link } from 'react-router';
import LatestNews from './latestNews';

export default class News extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h2>Novedades</h2>
				{this.props.other.news.map((news, i) => <LatestNews {...this.props} key={i} i={i} news={news} />)}
			</div>
		);
	}
}

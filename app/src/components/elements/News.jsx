import React from 'react';
import { Link } from 'react-router';
import LatestNews from './latestNews';

export default class News extends React.Component {
	constructor(props) {
		super(props);
		this.getMore=this.getMore.bind(this);
		this.getMoreButton=this.getMoreButton.bind(this);
	}

	getMore(e) {
		e.preventDefault();
		const pag = (this.props.other.news.length / 10) + 1;
		this.props.fetchGetMoreNews(`/novedades/${pag}`);
	}

	getMoreButton() {
		if (this.props.other.news[this.props.other.news.length-1] !== 'end') {
			return (
				<div>
					<button onClick={this.getMore} style={{'margin': '50px 0px'}}>
						Ver más
					</button>
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				<h2>Novedades</h2>
				{this.props.other.news.map((news, i) => <LatestNews {...this.props} key={i} i={i} news={news} />)}
				{this.getMoreButton()}
			</div>
		);
	}
}

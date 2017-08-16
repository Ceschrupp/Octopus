import React from 'react';
import CommentsList from './CommentsList';
import CommentCreator from './CommentCreator';
import * as actionCreators from '../../../redux/actions/actionCreators.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

function mapStateToProps(state) {
	return {
		userStuff: {
			user: state.userStuff.user,
		},
		comments: state.comments,
		other: {
			isFetching: state.isFetching,
			failedToFetch: state.failedToFetch,
			error: state.error
		},
	};
}

class CommentsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.getMore=this.getMore.bind(this);
		this.getMoreButton=this.getMoreButton.bind(this);
	}

	componenerWillMount() {
		this.props.fetchGetComments();
		console.log('HHH', this.props.comments)
	}

	getMore(e) {
		e.preventDefault();
		const pag = (this.props.comments.length / 10) + 1;
		this.props.fetchGetMoreComments(`/comentarios/${pag}`);
	}

	getMoreButton() {
		if (this.props.comments[this.props.comments.length-1] !== 'end') {
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
				<CommentsList {...this.props}/>
				{this.getMoreButton()}
				<CommentCreator {...this.props}/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
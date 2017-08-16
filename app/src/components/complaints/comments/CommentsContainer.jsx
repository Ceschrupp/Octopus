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
	}

	componenerWillMount() {
		this.props.fetchGetComments();
		console.log('HHH', this.props.comments)
	}

	render() {
		return (
			<div>
				<CommentsList {...this.props}/>
				<CommentCreator {...this.props}/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
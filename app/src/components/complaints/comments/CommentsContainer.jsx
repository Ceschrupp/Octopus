import React from 'react';
import CommentsList from './CommentsList';
import CommentCreator from './CommentCreator';

export default class CommentsContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componenerWillMount() {
		this.props.fetchGetComments();
	}
	///PASARLE SOLO LOS PROPS de acciones QUE NECESITAN
	render() {
		return (
			<div>
				<CommentsList {...this.props}/>
				<CommentCreator {...this.props}/>
			</div>
		);
	}
}

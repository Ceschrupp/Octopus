import React from 'react';

export default class CommentsItemList extends React.Component {
	constructor(props) {
		super(props);
		}

	handleSubmit(e){
		fetchDeleteComment(this.comment)
	}

	render() {

		const deleteCommentButton = function() {
				if(this.props.comment.user_id === this.props.userStuff.user.user_id) {
				return <button onClick={this.handleSubmit}>Eliminar</button>	
			} else { 
				return ''
			} 
		}

		return (
			<div>
				<div>
					{this.props.comment.userName}
				</div>
				<div>
					{this.props.comment.initiateCommentDate}
				</div>
				<div>
					{this.props.comment.userName}
				</div>
				<div>
					{this.props.comment.body}
				</div>
					{deleteCommentButton()}
			</div>
		)
	}
};
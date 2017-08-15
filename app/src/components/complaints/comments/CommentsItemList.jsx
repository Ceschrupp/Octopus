import React from 'react';
const s = require('../styles/CommentsItemList.scss')

export default class CommentsItemList extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(){
		this.props.fetchDeleteComment(this.comment);
	}

	render() {

		const deleteCommentButton = function() {
			if(this.props.comment.user_id === this.props.userStuff.user.user_id) {
				return <div onClick={this.handleSubmit} id={s.deleteComment}><i className='fa fa-cross' /></div>;
			} else { 
				return '';
			} 
		};

		return (
			<div className={s.comment}>
				<div>
					{this.props.comment.body}
				</div>
				{deleteCommentButton()}
				<div>
					{this.props.comment.userName}
				</div>
				<div>
					{this.props.comment.initiateCommentDate}
				</div>
			</div>
		);
	}
}
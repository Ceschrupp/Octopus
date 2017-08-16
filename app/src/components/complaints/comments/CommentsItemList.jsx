import React from 'react';
const s = require('../styles/CommentsItemList.scss')

export default class CommentsItemList extends React.Component {
	constructor(props) {
		super(props);
		this.deleteCommentButton=this.deleteCommentButton.bind(this);
	}

	deleteCommentButton(i) {

		if(this.commentsArr[i].user_id === this.props.userStuff.user.user_id) {
				return <div onClick={this.handleSubmit} name={this.commentsArr[i].complaint_id} id={s.deleteComment}><i className='fa fa-cross' /></div>;
			} else { 
				return '';
			}
	} 

	handleSubmit(e){
		let id=this.event.target.name;
		this.props.fetchDeleteComment(id);
	}

	componentWillMount() {
		const allComments = this.props.comments[0];
		this.commentsArr = [];
		for (let i = 0; i< allComments.length; i++) {
			this.commentsArr.push(allComments[i])
		}

		console.log('JFIFIEJIFEJIJ', this.props.userStuff)
	}
	render() {


		return (
			<div className={s.comment}>
				<div>
						{this.commentsArr.map((comment, i)=> <div key={Math.floor(Math.random()*i*100000)}><div>{comment.body}, dijo {comment.userName} ({comment.initiateCommentDate})</div><div>{this.deleteCommentButton(i)}</div></div>)}

				</div>
				

			</div>
		);
	}
}
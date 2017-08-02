import React from 'react';
const moment = require('moment');

export default class CommentCreator extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			initiateCommentDate: moment().format('D, MMMM, YYYY, h, a'),
			body: '',
			userName: this.props.userStuff.user.userName,
			user_id: this.props.userStuff.user.user_id
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSubmit(e) {
		this.props.fetchSendComment(this.state);
		e.preventDefault();
	}
	
	render() {
		return (
			<div>
				<form ref='CommentForm' onSubmit={this.handleSubmit} className='CommentForm'>
					<input 
						onChange={this.handleChange} 
						name='body'
						id="body"
						value={this.state.body}
						placeholder='Escribe un comentario...' 
						required
					/>
					<input disabled={!this.state.body} type="submit" />
				</form>
			</div>
		);
	}
}

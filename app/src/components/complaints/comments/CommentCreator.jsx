import React from 'react';
const s = require('../styles/CommentCreator.scss')
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
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state);
		this.props.fetchSendComment(this.state);
	}
	
	render() {
		return (
			<div className={s.creator}>
				<form ref='CommentForm' onSubmit={this.handleSubmit} className={s.form}>
					<input 
						onChange={this.handleChange} 
						name='body'
						id="body"
						value={this.state.body}
						placeholder='Comentario'
						className={s.input} 
						required
					/>
					<input disabled={!this.state.body} type="submit" className={s.button} value='Comentar'/>
				</form>
			</div>
		);
	}
}

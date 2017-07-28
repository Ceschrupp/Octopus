import React from "react";

export default class CommentCreator extends React.Component {

	constructor(props) {
		super(props);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.fetchSendComment({
			initiateCommentDate: moment().format("D, MMMM, YYYY, h, a"),//MOMENT CONFIGURAR,
			body: this.refs.comentario,
			userName: this.props.userStuff.user.userName,
			user_id: this.props.userStuff.user.user_id,
		})
	}
	
	render() {
		return (
			<div>
				<form ref='CommentForm' onSubmit={this.handleSubmit} className='CommentForm'>
					<input ref='comentario' type='text' placeholder='Escribe un comentario...' required></input>
	        <button type='submit'>Enviar</button>
    		</form>
			</div>
		);
	}
}

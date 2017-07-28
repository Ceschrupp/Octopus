import React from 'react';
import CommentsItemList from './CommentsItemList'

export default class CommentsList extends React.Component {
	constructor(props) {
		super(props);
		}
//HACER LA ACCION DE SCROLL
//PASAR SOLO LAS ACCIONES QUE USEN
	render() {
		return (
			<div className="lista-comments">
				{this.props.comments.map((comment, i) => {
					return(
						<CommentsItemList {...this.props} key={i} i={i} comment={comment} /> 
					)} 
				)}
			</div>
		)
	}
};

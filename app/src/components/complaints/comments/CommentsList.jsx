import React from 'react';
import CommentsItemList from './CommentsItemList';

const s = require('../styles/CommentsList.scss');
export default class CommentsList extends React.Component {
	constructor(props) {
		super(props);
	}
	//HACER LA ACCION DE SCROLL
	//PASAR SOLO LAS ACCIONES QUE USEN
	render() {
		return (
			<div className="lista-comments" id={s.list}>
				{this.props.comments.map((comment, i) => {
					return(
						<CommentsItemList {...this.props} key={()=> Math.floor(Math.random()*i*100) } i={i} comment={comment} /> 
					); }
				)}
			</div>
		);
	}
}

import React from 'react';

export default class CompleteInfo extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
				<div className='CompleteInfo'>
					<p id='CompleteInfo'>Por favor complete los campos de E-Mail y Password.</p>
				</div>
			)
	}
};
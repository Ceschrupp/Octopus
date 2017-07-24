import React from 'react';
import Header from '../components/layouts/header.jsx'

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
<<<<<<< HEAD

				{React.cloneElement(this.props.children, this.props)}
			
=======
				<Header/>

				
>>>>>>> cecilia
			</div>
		);
	}
}

export default Main;

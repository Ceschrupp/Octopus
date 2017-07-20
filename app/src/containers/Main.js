import React from 'react';
import Header from '../components/layouts/header.jsx'

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Header/>
				{React.cloneElement(this.props.children, this.props)}
				<Footer/>
			</div>
		);
	}
}

export default Main;

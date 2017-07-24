import React from 'react';
import Header from '../components/layouts/header.jsx'
import Footer from '../components/layouts/Footer.jsx'

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props);
		return(
			<div>
				<Header {...this.props}/>
					{React.cloneElement(this.props.children, this.props)}
				<Footer {...this.props}/>
			</div>
		);
	}
}

export default Main;

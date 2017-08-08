import React from 'react';
import Header from '../components/layouts/header.jsx';
import Footer from '../components/layouts/Footer.jsx';
import { Container } from 'react-grid-system';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div>
				<div className='background'></div>
				<Header {...this.props}/>
				<Container>
					{React.cloneElement(this.props.children, this.props)}
				</Container>
				<Container>
					<Footer {...this.props}/>
				</Container>
			</div>
		);
	}
}

export default Main;

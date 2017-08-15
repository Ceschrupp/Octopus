import React from 'react';
import { Link, IndexLink, hashHistory } from 'react-router';
import { bubble as Menu } from 'react-burger-menu';
import Dropdown from '../elements/Dropdown';
import BurgerMenu from '../elements/BurgerMenu';
const logo = require('Static/logo_octopus_footer.png');
import './header.css';


class Header extends React.Component {

	constructor(props) {
		super(props);
	}
	render() {
		if (!this.props.userStuff.isLogged) {
			return (
				<div className="header">
					<img className="logoHeader" src={logo}/>
				</div>
			);
		} else {
			return (
				<div className="header">
					<BurgerMenu {...this.props} user={this.props.userStuff.user}/>
					<div>{this.props.other.view}</div>
					<Dropdown options={this.props.userStuff.user.buildings}/>
					<div className="divdellink"><Link to='/' activeClassName='active'><img className='logoHeader' src={logo}/></Link></div>
				</div>
			);
		}
	}
}

export default Header;

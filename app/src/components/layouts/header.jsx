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
				<div className="header2">
					<img className="logoHeader" src={logo}/>
				</div>
			);
		} else if (this.props.userStuff.user.buildings.length === 1){
			return (
				<div className="header">
					<BurgerMenu user={this.props.userStuff.user}/>
					<div className="userName">{this.props.userStuff.user.userName}</div>
					<div className="divdellink">
						<div className="view">{this.props.other.view}</div>
						<Link to='/' activeClassName='active'><img className='logoHeader' src={logo}/></Link>
					</div>
				</div>
			);
		}
			return (
				<div className="header">
					<BurgerMenu user={this.props.userStuff.user}/>
					<Dropdown {...this.props} options={this.props.userStuff.user.buildings}/>
					<div className="divdellink">
						<div className="view">{this.props.other.view}</div>
						<div className="buildingNow">{this.props.other.buildingNow}</div>
						<Link to='/' activeClassName='active'><img className='logoHeader' src={logo}/></Link>
					</div>
				</div>
			);
	}
}

export default Header;

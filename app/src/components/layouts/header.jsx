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
		if (false) {
			return (
				<div className="header">
					<img className="logoHeader" src={logo}/>
				</div>
			);
		} else {
			return (
			<div className="header">
					<BurgerMenu user={this.props.userStuff.user}/>
	        <div>{this.props.view}</div>
<<<<<<< HEAD
				
	        <div className="divdellink"><Link to='/' activeClassName='active'><img className='logoHeader' src={logo}/></Link>
	        </div>


=======
					<Dropdown options={this.props.userStuff.user.buildings}/>
	        <div className="divdellink"><Link to='/' activeClassName='active'><img className='logoHeader' src={logo}/></Link></div>
>>>>>>> 24865f64e2e9dfa854510cce2d30ba63ab389e3f
			</div>
			)

		}
	}
}

export default Header;
		// <Select className='myMenu'>
		// 					<MenuTrigger className='MenuTrigger'>

		// 					<i className="fa fa-chevron-down" aria-hidden="true"></i>
		// 					</MenuTrigger>
		// 						<MenuOptions className='MenuOptions' >
		// 							{options}
		// 						</MenuOptions>
		// 				</Select>
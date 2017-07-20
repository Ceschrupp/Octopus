import React from 'react';
import {Link, IndexLink, hashHistory} from 'react-router';
import { nameOfAnimation as Menu } from 'react-burger-menu';

class Header extends React.Component {
	constructor(props) {
		super(props);

	}
  showSettings (event) {
    event.preventDefault();
    .
    .
    .
  }

	render() {
    if (!this.props.isLoged) {
      return (
  			<div>

          <h2>Header</h2>
          <img className='logoHeader' src='../static/logo_octopus_footer.png'></img>

        </div>
    } else {

		return (
			<div>

     <Menu>
       <a id="home" className="menu-item" href="/">Home</a>
       <a id="about" className="menu-item" href="/about">About</a>
       <a id="contact" className="menu-item" href="/contact">Contact</a>
       <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
     </Menu>

        <div>{this.props.view}</div>

        <IndexLink to='/' activeClassName='active'><img className='logoHeader' src='../static/logo_octopus_footer.png'></img></IndexLink>
        

			</div>
		);
    }
	}
}

export default Header;

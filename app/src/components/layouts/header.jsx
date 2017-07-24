import React from 'react';
import {Link, IndexLink, hashHistory} from 'react-router';
import { bubble as Menu } from 'react-burger-menu';

const logo = require('Static/logo_octopus_footer.png');
import './header.css';

class Header extends React.Component {
	constructor(props) {
		super(props);

	}
  showSettings (event) {
    event.preventDefault();

  }
	render() {
    if (false) {
      return (
  			<div>

          <img className="logoHeader" src={logo}/>

        </div>
    )} else {

		return (
			<div className="header">

        <Menu>
          <Link id="home" className="menu-item" href="/">Inicio</Link>
          <Link id="informar-pagos" className="menu-item" href="/informar-pagos">Informar Pagos</Link>
          <Link id="expensas" className="menu-item" href="/expensas">Expensas</Link>
          <Link id="cuenta-corriente" className="menu-item" href="/cuenta-corriente">Cuenta Corriente</Link>
          <Link id="novedades" className="menu-item" href="/novedades">Novedades</Link>
          <Link id="datos-utiles" className="menu-item" href="/datos-utiles">Datos Útiles</Link>
          <Link id="amenities" className="menu-item" href="/amenities">Amenities</Link>
          <Link id="reclamos" className="menu-item" href="/reclamos">Reclamos</Link>
          <div className='hr'></div>
          <Link  id="mi-cuenta" className="menu-item" href={this.props.user.username}>Mi Cuenta</Link>
          <Link id="cerrar-sesion" className="menu-item" href="/">Cerrar Sesión</Link>

        </Menu>

        <div>{this.props.view}</div>

        <Link to='/' activeClassName='active'><img className='logoHeader' src={logo}/></Link>


			</div>
		)

    }
	}
}

export default Header;

import React from 'react';
import {Link, IndexLink, hashHistory} from 'react-router';
import { bubble as Menu } from 'react-burger-menu';

const logo = require('Static/logo_octopus_footer.png');
import './header.css';

class Header extends React.Component {
	constructor(props) {
		super(props);
    console.log('props in header', props)

	}
  showSettings (event) {
    event.preventDefault();

  }
	render() {
    if (false) {
      return (
  			<div className="header">

          <img className="logoHeader" src={logo}/>

        </div>
      )
    } else {

		return (

			<div className="header">
        <Menu>
          <Link id="home" className="menu-item" to="/">Inicio</Link>
          <Link id="informar-pagos" className="menu-item" to='/informar-pagos'>Informar Pagos</Link>
          <Link id="expensas" className="menu-item" to="/expensas">Expensas</Link>
          <Link id="cuenta-corriente" className="menu-item" to="/cuenta-corriente">Cuenta Corriente</Link>
          <Link id="novedades" className="menu-item" to="/novedades">Novedades</Link>
          <Link id="datos-utiles" className="menu-item" to="/datos-utiles">Datos Útiles</Link>

          <Link id="amenities" className="menu-item" to="/amenities">Amenities</Link>
          <Link id="reclamos" className="menu-item" to="/reclamos">Reclamos</Link>
          <div className='hr'></div>
          <Link  id="mi-cuenta" className="menu-item" to={this.props.userStuff.user}>Mi Cuenta</Link>
          <Link id="cerrar-sesion" className="menu-item" to="/logout">Cerrar Sesión</Link>
        </Menu>
        <div>{this.props.view}</div>
        <div className="divdellink"><Link to='/' activeClassName='active'><img className='logoHeader' src={logo}/></Link></div>
			</div>
		)

    }
	}
}

export default Header;

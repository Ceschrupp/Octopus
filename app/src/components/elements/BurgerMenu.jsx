import React from 'react';
import { Link, IndexLink, hashHistory } from 'react-router';
import { bubble as Menu } from 'react-burger-menu';
import '../layouts/header.css';


class BurgerMenu extends React.Component {

	constructor(props) {
		super(props);
		this.state={isOpen:false};
		this.toggleMenu=this.toggleMenu.bind(this);
	}

	showSettings (event) {
		event.preventDefault();
	}

	toggleMenu() {
		this.setState({
			isOpen: false,
		});
	}

	render() {
    return (
			<div className="header">
	        <Menu isOpen={ this.state.isOpen }>
	          <Link onClick={this.toggleMenu } id="home" className="menu-item" to="/" >Inicio</Link>
	          <Link onClick={this.toggleMenu } id="informar-pagos" className="menu-item" to='/informar-pagos' >Informar Pagos</Link>
	          <Link onClick={this.toggleMenu } id="expensas" className="menu-item" to="/expensas" >Expensas</Link>
	          <Link onClick={this.toggleMenu } id="cuenta-corriente" className="menu-item" to="/cuenta-corriente" >Cuenta Corriente</Link>
	          <Link onClick={this.toggleMenu } id="novedades" className="menu-item" to="/novedades" >Novedades</Link>
	          <Link onClick={this.toggleMenu } id="datos-utiles" className="menu-item" to="/datos-utiles" >Datos Útiles</Link>
	          <Link onClick={this.toggleMenu } id="amenities" className="menu-item" to="/amenities" >Amenities</Link>
	          <Link onClick={this.toggleMenu } id="reclamos" className="menu-item" to="/reclamos" >Reclamos</Link>
	          <div className='hr'></div>
	          <Link  onClick={this.toggleMenu } id="mi-cuenta" className="menu-item" to={this.props.user} >Mi Cuenta</Link>
	          <Link onClick={this.toggleMenu } id="cerrar-sesion" className="menu-item" to="/logout">Cerrar Sesión</Link>
	        </Menu>
			</div>
    )
	}
}

export default BurgerMenu;

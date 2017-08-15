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

	toggleMenu(e) {
		this.setState({
			isOpen: false,
		});
		this.props.changeView(e.target.id);
	}

	render() {
		return (
			<div className="header">
				<Menu isOpen={ this.state.isOpen }>
					<Link onClick={this.toggleMenu } id="Home" className="menu-item" to="/" >Inicio</Link>
					<Link onClick={this.toggleMenu } id="Informar Pago" className="menu-item" to='/informar-pagos' >Informar Pagos</Link>
					<Link onClick={this.toggleMenu } id="Expensas" className="menu-item" to="/expensas" >Expensas</Link>
					<Link onClick={this.toggleMenu } id="Cuenta Corriente" className="menu-item" to="/cuenta-corriente" >Cuenta Corriente</Link>
					<Link onClick={this.toggleMenu } id="Novedades" className="menu-item" to="/novedades" >Novedades</Link>
					<Link onClick={this.toggleMenu } id="Datos Útiles" className="menu-item" to="/datos-utiles" >Datos Útiles</Link>
					<Link onClick={this.toggleMenu } id="Amenities" className="menu-item" to="/ver-reservas" >Amenities</Link>
					<Link onClick={this.toggleMenu } id="Reclamos" className="menu-item" to="/reclamos" >Reclamos</Link>
					<div className='hr'></div>
					<Link  onClick={this.toggleMenu } id="mi-cuenta" className="menu-item" to={`/cuenta/${this.props.user}`} >Mi Cuenta</Link>
					<Link onClick={this.toggleMenu } id="cerrar-sesion" className="menu-item" to="/logout">Cerrar Sesión</Link>
				</Menu>
			</div>
		);
	}
}

export default BurgerMenu;

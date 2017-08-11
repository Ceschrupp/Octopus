import React from 'react';
import {Link, IndexLink, hashHistory} from 'react-router';
import { bubble as Menu } from 'react-burger-menu';
import Dropdown from 'react-dropdown'
const logo = require('Static/logo_octopus_footer.png');
import './header.css';
import 'react-select/dist/react-select.css';
var Select = require('react-menu/dist/react-menu');
var MenuTrigger = Select.MenuTrigger;
var MenuOptions = Select.MenuOptions;
var MenuOption = Select.MenuOption;
//Select.injectCSS();
class Header extends React.Component {
	constructor(props) {
		super(props);
    this.state={isOpen:false};
    this.toggleMenu=this.toggleMenu.bind(this);
		this.logChange = this.logChange.bind(this);
	}


  showSettings (event) {
    event.preventDefault();
  }
  toggleMenu() {
    this.setState({
      isOpen: false,
    })
  }
	logChange(val) {
		this.props.buildingNow(val.value)
	}


	render() {
		console.log('ceci', this.props.userStuff.user.buildings);
		const options = this.props.userStuff.user.buildings.map((building, i) =>  (
			<MenuOption className='MenuOption' onSelect={this.logChange.bind(this, building.building_id)}>
				{building.buildingName}
			</MenuOption>
		));

    if (false) {
      return (
  			<div className="header">
          <img className="logoHeader" src={logo}/>
        </div>
      )
    } else {

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
	          <Link  onClick={this.toggleMenu } id="mi-cuenta" className="menu-item" to={this.props.userStuff.user} >Mi Cuenta</Link>
	          <Link onClick={this.toggleMenu } id="cerrar-sesion" className="menu-item" to="/logout">Cerrar Sesión</Link>
	        </Menu>
	        <div>{this.props.view}</div>
						<Select className='myMenu'>
							<MenuTrigger className='MenuTrigger'>
							<i className="fa fa-chevron-down" aria-hidden="true"></i>
							</MenuTrigger>
								<MenuOptions className='MenuOptions' >
									{options}
								</MenuOptions>
						</Select>
	        <div className="divdellink"><Link to='/' activeClassName='active'><img className='logoHeader' src={logo}/></Link>
	        </div>

					<Select className="select" name="form-field-name" options={options} onChange={this.logChange} />

					<Select className="select" name="form-field-name" options={options} onChange={this.logChange} />
			</div>
		)

    }
	}
}

export default Header;

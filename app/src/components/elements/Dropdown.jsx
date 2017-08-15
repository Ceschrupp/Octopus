import React from 'react';
import { Link, IndexLink, hashHistory } from 'react-router';
import '../layouts/header.css';
var Select = require('./Menu/Menu');
var MenuTrigger = require('./Menu/MenuTrigger');
var MenuOptions = require('./Menu/MenuOptions');
var MenuOption = require('./Menu/MenuOption');


class Dropdown extends React.Component {

	constructor(props) {
		super(props);
		this.logChange = this.logChange.bind(this);
	}

	logChange(val) {
		console.log('vaaaaaaal', val)
		this.props.buildingNow(val);
	}

	render() {
    const Options = this.props.options.map((building, i) =>  (
      <MenuOption key={building.building_id} className='MenuOption' onSelect={this.logChange.bind(this, 	  building.building_id)}>
        {building.building_name}
      </MenuOption>
    ));
    return(
			<div className="header">
						<Select className='myMenu'>
							<MenuTrigger className='MenuTrigger'>
							  <i className="fa fa-chevron-down" aria-hidden="true"></i>
							</MenuTrigger>
							<MenuOptions className='MenuOptions' >
								{Options}
							</MenuOptions>
						</Select>
			</div>
    )
  }
}

export default Dropdown;

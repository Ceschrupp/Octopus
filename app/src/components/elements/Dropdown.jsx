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
		this.props.buildingNow(val.value);
	}

	render() {
    const options = this.props.options.map((building, i) =>  (
      <MenuOption key={building.building_id} className='MenuOption' onSelect={this.logChange.bind(this, building.building_id)}>
        {building.buildingName}
      </MenuOption>
    ));
    return(
			<div className="header">
						<Select className='myMenu'>
							<MenuTrigger className='MenuTrigger'>
							  <i className="fa fa-chevron-down" aria-hidden="true"></i>
							</MenuTrigger>
							<MenuOptions className='MenuOptions' >
								{options}
							</MenuOptions>
						</Select>
			</div>
    )
  }
}

export default Dropdown;

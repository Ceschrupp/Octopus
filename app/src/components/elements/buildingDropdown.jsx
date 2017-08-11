import React from 'react';
import { Link } from 'react-router';
const s = require('./LoginForm.scss');


export default class SubmitButton extends React.Component {
	constructor(props) {
		super(props);
	}
  componentWillMount(){

    // {this.props.userStuff.user.building_id.map((booking, i) => <AmenitiesList {...this.props} key={i} i={i} booking={booking} /> )}

  }
	render() {
		return (
			<div>
        <select className= {s.AmenitiesDropdown} ref='bookingBuilding' >
          <option value="volvo">this.props.userStuff.user.building</option>
          <option value="saab"></option>
          <option value="mercedes"></option>
          <option value="audi"></option>
        </select>
			</div>
		);
	}
}

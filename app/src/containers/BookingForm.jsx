import React from 'react';
import {Link} from 'react-router';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import AmenitiesForm from '../components/amenitiesForm.jsx';
import SubmitButton from '../components/SubmitButton.jsx';
import * as actionCreators from "../redux/actions/actionCreators.js";
import Main from "../containers/main.jsx"

function mapsStateToProps (state){
	return {
		// objName: {
			// keys:values 
		// }
	}
};

function mapDispatchToProps (dispatch){
		return bindActionCreators(actionCreators, dispatch);
	}

class AmenitiesFormContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<AmenitiesForm />
				<SubmitButton />
			</div>
		)};
};

export default connect(mapsStateToProps, mapDispatchToProps)(AmenitiesFormContainer);

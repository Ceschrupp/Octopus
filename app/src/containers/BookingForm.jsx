import React from 'react';
import AmenitiesForm from '../components/amenitiesForm.jsx';
import SubmitButton from '../components/SubmitButton.jsx';

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

export default AmenitiesFormContainer;

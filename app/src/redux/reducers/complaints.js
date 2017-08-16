import { GET_COMPLAINTS, DELETE_COMPLAINT, EDIT_COMPLAINT, CREATE_COMPLAINT, GET_MORE_COMPLAINTS } from '../actions/globalActions';

function complaintsReducer(state = [] , action) {

	switch (action.type) {

	case GET_COMPLAINTS: {
		return action.complaints;
	}

	case CREATE_COMPLAINT: {
		return state.concat(action.complaint);
	}

	case DELETE_COMPLAINT: {
		return [
			...state.slice(0,state.map(ob=>ob.complaint_id).indexOf(action.id)),
			...state.slice(state.map(ob=>ob.complaint_id).indexOf(action.id) + 1)
		];
	}
	
	case EDIT_COMPLAINT: {
		return [
			...state.slice(0,state.map(ob=>ob.complaint_id).indexOf(action.complaint.complaint_id)),
			action.complaint,
			...state.slice(state.map(ob=>ob.complaint_id).indexOf(action.complaint.complaint_id) + 1)
		];
	}

	case GET_MORE_COMPLAINTS: {
		return state.concat(action.complaints);
	}

	default:
		return state;
	}
}

export default complaintsReducer;

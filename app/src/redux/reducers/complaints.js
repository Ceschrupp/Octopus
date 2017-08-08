import { GET_COMPLAINTS, DELETE_COMPLAINT, EDIT_COMPLAINT, CREATE_COMPLAINT, GET_MORE_COMPLAINTS } from '../actions/globalActions';

function complaintsReducer(state = [] , action) {

	switch (action.type) {

	case GET_COMPLAINTS: {
		return Object.assign({}, state, {
			complaints:action.complaints
		});
	}

	case CREATE_COMPLAINT: {
		return Object.assign({}, state, {
			complaint:action.complaint
		});
	}

	case DELETE_COMPLAINT: {
		return Object.assign({}, state, {
			complaints: [
			...state.slice(0,state.map(ob=>ob.complaint_id).indexOf(action.id)),
			...state.slice(state.map(ob=>ob.complaint_id).indexOf(action.id) + 1)
		]});
	}
	
	case EDIT_COMPLAINT: {
		return Object.assign({}, state, {
			complaints: [
			...state.slice(0,state.map(ob=>ob.complaint_id).indexOf(action.complaint.complaint_id)),
			action.complaint,
			...state.slice(state.map(ob=>ob.complaint_id).indexOf(action.complaint.complaint_id) + 1)
		]});
	}
		return 

	case GET_MORE_COMPLAINTS: {
		return Object.assign({}, state, {
			complaints:action.complaints
		})
	}

	default:
		return state;
	}
}

export default complaintsReducer;

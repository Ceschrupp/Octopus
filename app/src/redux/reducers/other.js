import { BUILDING_NOW, IS_FETCHING, FAILED_TO_FETCH, CHANGE_VIEW, GET_NEWS, GET_MORE_NEWS, GET_INFO, GET_MORE_INFO, GET_EXPENSES, GET_MORE_EXPENSES, GET_PAYMENTS, CREATE_PAYMENT, GET_MORE_PAYMENTS } from '../actions/globalActions';

function otherReducer(state = {
	view: 'Menú',
	news: [],
	info: [],
	expenses: [],
	payments: [],
	isFetching: false,
	failedToFetch: false,
	buildingNow: {}
} , action) {

	switch (action.type) {

	case BUILDING_NOW:
		return Object.assign({}, state, {
			buildingNow: action.buildingNow
		});

	case IS_FETCHING:
		return Object.assign({}, state, {
			isFetching: action.boolean
		});

	case FAILED_TO_FETCH:
		return Object.assign({}, state, {
			failedToFetch: action.err
		});

	case CHANGE_VIEW:
		return Object.assign({}, state, {
			view: action.view
		});
	///////////////////////////////NEWS
	case GET_NEWS:
		return Object.assign({}, state, {
			news: action.news
		});

	case GET_MORE_NEWS:
		return Object.assign({}, state, {
			news: [...state.news, action.news]
		});
	///////////////////////////////DATOS UTILES
	case GET_INFO:
		return Object.assign({}, state, {
			info: action.info
		});

	case GET_MORE_INFO:
		return Object.assign({}, state, {
			info: [...state.info, action.info]
		});
	///////////////////////////////PAGOS
	case GET_PAYMENTS:
		return Object.assign({}, state, {
			payments: action.payments
		});

	case GET_MORE_PAYMENTS:
		return Object.assign({}, state, {
			payments: [...state.payments, action.payments]
		});

	case CREATE_PAYMENT:
		return Object.assign({}, state, {
			payments: [...state.payments, action.payment]
		});
	///////////////////////////////EXPENSAS
	case GET_EXPENSES:
		return Object.assign({}, state, {
			expenses: action.expenses
		});

	case GET_MORE_EXPENSES:
		return Object.assign({}, state, {
			expenses: [...state.expenses, action.expenses]
		});

	default:
		return state;
	}
}

export default otherReducer;

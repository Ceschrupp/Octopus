import { IS_FETCHING, CHANGE_VIEW, GET_NEWS, GET_INFO, FAILED_TO_FETCH, ERROR, GET_EXPENSES, GET_PAYMENTS, PAYMENT_NOTICE } from '../actions/globalActions';

function otherReducer(state = {
		view: "Menú",
		news: [],
		info: [],
		expenses: [],
		payments: [],
		paymentNotice: [],
		isFetching: false,
		failedToFetch: false,
		error: null
	} , action) {

	switch (action.type) {

		case IS_FETCHING:
			return Object.assign({}, state, {
					"isFetching": action.boolean
			});

		case CHANGE_VIEW:
			return Object.assign({}, state, {
					view: action.view
			});

		case GET_NEWS:
			return Object.assign({}, state, {
					news: action.news
			});

		case GET_INFO:
			return Object.assign({}, state, {
					info: action.info
			});

		case GET_PAYMENTS:
			return Object.assign({}, state, {
					payments: action.payments
			});

		case FAILED_TO_FETCH:
			return Object.assign({}, state, {
				logErr: action.err
			});

		case GET_EXPENSES:
			return Object.assign({}, state, {
				expenses: action.expenses
			});

		case ERROR:
			return Object.assign({}, state, {
				logErr: action.err
			});

		case PAYMENT_NOTICE:
			return Object.assign({}, state, {
				paymentNotice: action.paymentNotice
			})
			
		default:
			return state;
	}
}

export default otherReducer;

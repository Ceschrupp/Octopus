import { IS_FETCHING, FAILED_TO_FETCH, ERROR, CHANGE_VIEW, GET_NEWS, GET_MORE_NEWS, GET_INFO, GET_MORE_INFO, GET_EXPENSES, GET_MORE_EXPENSES, GET_PAYMENTS, GET_MORE_PAYMENTS, PAYMENT_NOTICE } from '../actions/globalActions';

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
					isFetching: action.boolean
			});
		case FAILED_TO_FETCH:
			return Object.assign({}, state, {
				logErr: action.err
			});

		case ERROR:
			return Object.assign({}, state, {
				logErr: action.err
			});

		case CHANGE_VIEW:
			return Object.assign({}, state, {
					view: action.view
			});

		case GET_NEWS:
			return Object.assign({}, state, {
					news: action.news
			});
		case GET_MORE_NEWS:
			return Object.assign({}, state, {
					news: action.news
			});

		case GET_INFO:
			return Object.assign({}, state, {
					info: action.info
			});
		case GET_MORE_INFO:
			return Object.assign({}, state, {
					info: action.info
			});

		case GET_PAYMENTS:
			return Object.assign({}, state, {
					payments: action.payments
			});
		case GET_MORE_PAYMENTS:
			return Object.assign({}, state, {
					payments:action.payments
			});
		case PAYMENT_NOTICE:
			return Object.assign({}, state, {
				paymentNotice: action.paymentNotice
			});

		case GET_EXPENSES:
			return Object.assign({}, state, {
				expenses: action.expenses
			});
		case GET_MORE_EXPENSES:
			return Object.assign({}, state, {
				expenses:action.expenses
			})
			

			
		default:
			return state;
	}
}

export default otherReducer;

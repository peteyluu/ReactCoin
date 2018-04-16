import {
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILURE,
} from '../actions/types';

const initialState = {
  loading: true,
  error: null,
  currencies: [],
  totalCurrencies: 0,
  totalPages: 0,
  page: 1,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        loading: action.payload.loading,
        currencies: action.payload.currencies,
        totalCurrencies: action.payload.totalCurrencies,
        totalPages: action.payload.totalPages
      };
    case FETCH_CURRENCIES_FAILURE:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error
      };
    default:
      return state;
  }
};

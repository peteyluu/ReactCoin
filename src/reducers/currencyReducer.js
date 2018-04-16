import {
  FETCH_CURRENCY_SUCCESS,
  FETCH_CURRENCY_FAILURE,
} from '../actions/types';

const initialState = {
  loading: true,
  error: null,
  currency: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        currency: action.currency,
      };
    case FETCH_CURRENCY_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
};
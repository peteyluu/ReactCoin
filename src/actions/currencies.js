import {
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILURE,
  TOGGLE_PAGE,
} from './types';
import { handleResponse } from '../helpers/helpers';
import { API_ROOT_URL } from '../helpers/config';

const fetchCurrenciesSuccess = data => ({
  type: FETCH_CURRENCIES_SUCCESS,
  payload: {
    loading: false,
    currencies: data.currencies,
    totalCurrencies: data.totalCurrencies,
    totalPages: data.totalPages,
  },
});

const fetchCurrenciesFailure = error => ({
  type: FETCH_CURRENCIES_FAILURE,
  payload: {
    loading: false,
    error: error,
  },
});

const togglePageAction = page => ({
  type: TOGGLE_PAGE,
  page,
});

export const fetchCurrencies = () => (dispatch, getState) => {
  const { page } = getState();
  fetch(`${API_ROOT_URL}/cryptocurrencies?page=${page}&perPage=20`)
    .then(handleResponse)
    .then(data => dispatch(fetchCurrenciesSuccess(data)))
    .catch(error => dispatch(fetchCurrenciesFailure(error)))
};

export const togglePage = (page, cb) => dispatch => {
  dispatch(togglePageAction(page));
  cb();
}

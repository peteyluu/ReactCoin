import {
  FETCH_CURRENCY_SUCCESS,
  FETCH_CURRENCY_FAILURE,
} from './types';
import { handleResponse } from '../helpers/helpers';
import { API_ROOT_URL } from '../helpers/config';

const fetchCurrencySuccess = data => ({
  type: FETCH_CURRENCY_SUCCESS,
  loading: false,
  currency: data,
});

const fetchCurrencyFailure = error => ({
  type: FETCH_CURRENCY_FAILURE,
  loading: false,
  error: error,
});

export const fetchCurrency = id => dispatch => {
  fetch(`${API_ROOT_URL}/cryptocurrencies/${id}`)
    .then(handleResponse)
    .then(data => dispatch(fetchCurrencySuccess(data)))
    .catch(error => dispatch(fetchCurrencyFailure(error)))
};

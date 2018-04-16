import {
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILURE,
  TOGGLE_LOADING,
} from './types';
import { handleResponse } from '../helpers/helpers';
import { API_ROOT_URL } from '../helpers/config';

export const fetchCurrencies = () => dispatch => {
  fetch(`${API_ROOT_URL}/cryptocurrencies?page=1&perPage=20`)
    .then(handleResponse)
    .then((data) => {
      dispatch({
        type: FETCH_CURRENCIES_SUCCESS,
        payload: {
          loading: false,
          currencies: data.currencies,
          totalCurrencies: data.totalCurrencies,
          totalPages: data.totalPages,
        },
      });
    })
    .catch((error) => {
      console.log('Error: ', error);
      dispatch({
        type: FETCH_CURRENCIES_FAILURE,
        payload: {
          loading: false,
          error: error
        },
      });
    });
}

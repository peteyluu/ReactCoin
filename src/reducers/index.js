import { combineReducers } from 'redux';
import currenciesReducer from './currenciesReducer';
import currencyReducer from './currencyReducer';

export default combineReducers({
  currencies: currenciesReducer,
  currency: currencyReducer,
});

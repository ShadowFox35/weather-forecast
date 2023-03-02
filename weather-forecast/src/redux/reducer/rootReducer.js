import { combineReducers } from 'redux';
import citiesArrayRedicer from './citiesArrayOption';

export const rootReducer = combineReducers({
  citiesArrayRedicer: citiesArrayRedicer,
});

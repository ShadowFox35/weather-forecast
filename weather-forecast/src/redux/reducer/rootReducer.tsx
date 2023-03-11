import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import citiesArrayRedicer from './citiesArrayOption';
import { RootState } from '../store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const rootReducer = combineReducers({
  citiesArrayRedicer: citiesArrayRedicer,
});

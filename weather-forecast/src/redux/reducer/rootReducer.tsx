import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import citiesArrayRedicer from './citiesArrayOption';
import type { RootState, AppDispatch } from '../store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch
export const rootReducer = combineReducers({
  citiesArrayRedicer: citiesArrayRedicer,
});

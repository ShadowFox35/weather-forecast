import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer/rootReducer';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>;

export default store;

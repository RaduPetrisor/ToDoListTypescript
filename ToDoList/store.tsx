import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './redux/ListReducer';

const rootReducer = combineReducers(
    {reducer: reducer}
)

const store = () => {
    return createStore(rootReducer, applyMiddleware(logger, thunk));}

export default store;
import { combineReducers } from 'redux';
import FacebookReducer from './FacebookReducer';

const combinedReducers = combineReducers({
	FacebookReducer,
});

export default combinedReducers;

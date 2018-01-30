import { createStore } from 'redux';
import combinedReducers from './reducers/index';

const AppStore = createStore(combinedReducers);

export default AppStore;

import { createStore } from 'tracked-redux';
import reducers from './reducers';

export const store = createStore(reducers);

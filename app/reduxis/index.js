// I called this folder `reduxis` (my initial thought was just `redux`)
// so, when importing not to confuse with an official "redux" import
// dunno if there is a convention to give this a proper name instead - I am not
// aware of

import { createStore } from 'tracked-redux';
import reducers from './reducers';

export const store = createStore(reducers);

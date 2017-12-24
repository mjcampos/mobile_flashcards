import {combineReducers} from 'redux';

import decks from './decks.js';

var rootReducer = combineReducers({
	decks
});

export default rootReducer;
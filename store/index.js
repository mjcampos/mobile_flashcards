import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

var store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
	console.log('store', store.getState());
});

export default store;
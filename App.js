import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';
import rootReducer from './reducers';
import TabNavigation from './src/TabNavigation';
import {setDecks} from './utils/helpers';
import store from './store';

class App extends Component {
	componentWillMount() {
		setDecks();
	}

	render() {
		return (
			<Provider store={store}>
				<TabNavigation/>
			</Provider>
		);
	}
}

export default App;
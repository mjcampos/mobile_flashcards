import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import TabNavigation from './src/TabNavigation';
import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<TabNavigation/>
			</Provider>
		);
	}
}

export default App;
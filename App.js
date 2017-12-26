import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import TabNavigation from './src/TabNavigation';
import StackNavigation from './src/StackNavigation';
import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<StackNavigation/>
			</Provider>
		);
	}
}

export default App;
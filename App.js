import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import StackNavigation from './src/components/StackNavigation';
import store from './src/store';

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
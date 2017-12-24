import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './src/TabNavigation';
import {setDecks} from './utils/helpers';

class App extends Component {
	componentWillMount() {
		setDecks();
	}

	render() {
		return (
			<TabNavigation/>
		);
	}
}

export default App;
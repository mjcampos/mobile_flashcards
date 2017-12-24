import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {getDecks} from './utils/helpers';
import {connect} from 'react-redux';

class DeckList extends Component {
	render() {
		return (
			<View>
				<Text>DeckList.js</Text>
			</View>
		);
	}
}

function mapStateToProps(state) {
	console.log(state);

	return state;
}

export default connect(mapStateToProps, null)(DeckList);
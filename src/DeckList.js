import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
import {getDecks} from '../utils/helpers';
import store from '../store';

var _ = require('lodash');

class DeckList extends Component {
	componentWillMount() {
		store.dispatch(getDecks());
	}

	render() {
		const {viewStyles} = styles;
		var {decks} = this.props;

		return (
			<View style={viewStyles}>
				{decks.map(deck => <Text key={deck}>{deck}</Text>)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewStyles: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around'
	}
});

function mapStateToProps(state) {
	return {
		decks: _.keys(state.decks)
	};
}

export default connect(mapStateToProps, null)(DeckList);
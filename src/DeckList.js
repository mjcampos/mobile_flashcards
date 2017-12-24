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
		const {viewStyles, textStyles} = styles;
		var {decks} = this.props;

		return (
			<View style={viewStyles}>
				{decks.map(deck => {
					var {title, questions} = deck;

					return (
						<View key={title}>
							<Text>{title}</Text>
							<Text style={textStyles}>{questions.length}</Text>
						</View>
					);
				})}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewStyles: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	textStyles: {
		textAlign: 'center'
	}
});

function mapStateToProps(state) {
	var decks = [];

	_.mapKeys(state.decks, (val, key) => decks.push(state.decks[key]));

	return {
		decks
	};
}

export default connect(mapStateToProps, null)(DeckList);
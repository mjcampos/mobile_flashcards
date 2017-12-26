import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import {connect} from 'react-redux';
import {getDecks} from '../utils/helpers';
import store from '../store';

var _ = require('lodash');

class DeckList extends Component {
	componentWillMount() {
		store.dispatch(getDecks());
	}

	render() {
		const {viewStyles, countStyles, titleStyles} = styles;
		var {decks} = this.props;

		return (
			<ScrollView contentContainerStyle={viewStyles}>
				<View>
					{decks.map(deck => {
						var {title, questions} = deck;

						return (
							<TouchableHighlight key={title} onPress={() => this.props.navigation.navigate('Deck', {deck: title})}>
								<View>
									<Text style={titleStyles}>{title}</Text>
									<Text style={countStyles}>{questions.length} Cards</Text>
								</View>
							</TouchableHighlight>
						);
					})}
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	viewStyles: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	titleStyles: {
		fontSize: 30,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	countStyles: {
		textAlign: 'center',
		fontSize: 20
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
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {connect} from 'react-redux';

class Deck extends Component {
	render() {
		const {viewStyles, titleStyles, countStyles} = styles;
		var {title, questions} = this.props;

		return (
			<View style={viewStyles}>
				<View>
					<Text style={titleStyles}>{title}</Text>
					<Text style={countStyles}>{questions.length}</Text>
				</View>

				<View>
					<Button title="Add Card" onPress={() => this.props.navigation.navigate('AddCard')}/>
					<Button title="Start Quiz" onPress={() => console.log("Start Quiz")}/>
				</View>
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

function mapStateToProps(state, props) {
	var {deck} = props.navigation.state.params;

	return state.decks[deck];
}

export default connect(mapStateToProps, null)(Deck);
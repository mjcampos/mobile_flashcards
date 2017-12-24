import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class NewDeck extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deck: ''
		}
	}

	render() {
		const {viewStyles, titleStyles, textInputStyles} = styles;
		var {deck} = this.state;

		return (
			<View style={viewStyles}>
				<Text style={titleStyles}>What is the title of your new deck?</Text>
				<TextInput
					style={textInputStyles}
					autoCapitalize={'sentences'}
					placeholder={'Place new deck here'}
					value={deck}
					onChangeText={deck => this.setState({deck})}
				/>
				<Button title="Submit" onPress={() => console.log(deck)}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewStyles: {
		flex: 1,
		padding: 20
	},
	titleStyles: {
		fontSize: 30,
		fontWeight: 'bold',
		alignItems: 'center'
	},
	textInputStyles: {
		alignItems: 'stretch',
		height: 40,
		borderWidth: 2,
		alignItems: 'stretch',
		marginTop: 20
	}
});

export default NewDeck;
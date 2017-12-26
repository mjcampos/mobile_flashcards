import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native';

class AddCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: '',
			answer: ''
		}
	}

	onUserSubmit = () => {
		var {question, answer} = this.state;

		if(question.trim().length && answer.trim().length) {
			console.log("Valid");
		} else {
			console.log("Invalid");
		}
		
		this.setState({
			question: '',
			answer: ''
		});

		Keyboard.dismiss();
	}

	render() {
		const {viewStyles, textInputStyles} = styles;
		var {question, answer} = this.state;

		return (
			<View style={viewStyles}>
				<TextInput
					style={textInputStyles}
					autoCapitalize={'sentences'}
					placeholder={'Insert Question'}
					value={question}
					onChangeText={question => this.setState({question})}
				/>

				<TextInput
					style={textInputStyles}
					autoCapitalize={'sentences'}
					placeholder={'Insert Answer'}
					value={answer}
					onChangeText={answer => this.setState({answer})}
				/>

				<Button title="Submit" onPress={this.onUserSubmit}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewStyles: {
		flex: 1,
		padding: 20
	},
	textInputStyles: {
		alignItems: 'stretch',
		height: 40,
		borderWidth: 2,
		alignItems: 'stretch',
		marginTop: 20
	}
});

export default AddCard;
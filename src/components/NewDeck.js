import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native';
import {saveDeckTitle} from '../utils/helpers';
import store from '../store';

class NewDeck extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		}
	}

	onUserSubmit = () => {
		var {title} = this.state;
		var {navigate} = this.props.navigation;

		if(title.trim().length) {
			store.dispatch(saveDeckTitle(title, navigate));
		} else {
			console.log("Invalid");
		}

		this.setState({
			title: ''
		});

		Keyboard.dismiss();
	}

	render() {
		const {viewStyles, titleStyles, textInputStyles} = styles;
		var {title} = this.state;

		return (
			<View style={viewStyles}>
				<Text style={titleStyles}>What is the title of your new deck?</Text>
				<TextInput
					style={textInputStyles}
					autoCapitalize={'sentences'}
					placeholder={'Place new deck title here'}
					value={title}
					onChangeText={title => this.setState({title})}
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
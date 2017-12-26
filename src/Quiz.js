import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {connect} from 'react-redux';

class Quiz extends Component {
	render() {
		return (
			<View>
				<Text>Quiz.js</Text>
			</View>
		);
	}
}

function mapStateToProps(state, props) {
	var {title} = props.navigation.state.params;

	return state;
}

export default connect(mapStateToProps, null)(Quiz);
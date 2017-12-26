import React, {Component} from 'react';
import { NavigationActions } from 'react-navigation'
import { StyleSheet, Text, View, Button } from 'react-native';
import {connect} from 'react-redux';

class Quiz extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			correct: 0,
			revealAnswer: false
		}
	}

	correctAnswer = () => {
		var {index, correct} = this.state;

		this.setState({
			index: index + 1,
			correct: correct + 1
		});
	}

	incorrectAnswer = () => {
		var {index} = this.state;

		this.setState({
			index: index + 1
		});
	}

	render() {
		const {viewStyles, questionStyles} = styles;
		var {index, correct, revealAnswer} = this.state;
		var {questions} = this.props;

		var showQuestion = () => {
			return (
				<View style={questionStyles}>
					<Text>{questions[index].question}</Text>
					<Button
						title="Answer" onPress={() => this.setState({revealAnswer: !this.state.revealAnswer})}
					/>
					{buttons()}
				</View>
			);
		}

		var showAnswer = () => {
			return (
				<View style={questionStyles}>
					<Text>{questions[index].answer}</Text>
					<Button
						title="Question" onPress={() => this.setState({revealAnswer: !this.state.revealAnswer})}
					/>
					{buttons()}
				</View>
			);
		}

		var quizComplete = () => {
			return (
				<View style={questionStyles}>
					<Text>Quiz is complete</Text>
					<Button
						title="Back"
						onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
					/>
				</View>
			);
		}

		var buttons = () => {
			return (
				<View>
					<Button color={'green'} title="Correct" onPress={() => this.correctAnswer()}/>
					<Button color={'red'} title="Incorrect" onPress={() => this.setState({index: index + 1})}/>
				</View>
			);
		}

		return (
			<View>
				<View>
					<Text>{correct} / {questions.length}</Text>
				</View>

				{index >= questions.length ? quizComplete() : revealAnswer ? showAnswer() : showQuestion()}
			</View>
		);

	}
}

const styles = StyleSheet.create({
	viewStyles: {
		flex: 1
	},
	questionStyles: {
		alignItems: 'center'
	}
});

function mapStateToProps(state, props) {
	var {title} = props.navigation.state.params;

	return {
		questions: state.decks[title].questions
	};
}

export default connect(mapStateToProps, null)(Quiz);
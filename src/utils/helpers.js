import {AsyncStorage, Keyboard} from 'react-native';
import initialDeck from './initialDeck';
import * as decksActions from '../actions/decks';

const KEY = "DECKS";

export var getDecks = () => dispatch => {
	AsyncStorage.setItem(KEY, JSON.stringify(initialDeck)).then(() => {
		AsyncStorage.getItem(KEY).then(res => JSON.parse(res)).then(data => dispatch(decksActions.getDecks(data)));
	});
}

export var saveDeckTitle = (title, navigate) => dispatch => {
	AsyncStorage.getItem(KEY).then(res => JSON.parse(res)).then(data => {
		data[title] = {
			title,
			questions: []
		}

		AsyncStorage.setItem(KEY, JSON.stringify(data)).then(() => {
			dispatch(decksActions.saveDeckTitle(data));
			navigate('Deck', {title});
		});
	});
}

export var addCardToDeck = (title, questionObj, goBack) => dispatch => {
	AsyncStorage.getItem(KEY).then(res => JSON.parse(res)).then(data => {
		data[title].questions.push(questionObj)

		AsyncStorage.setItem(KEY, JSON.stringify(data)).then(() => {
			dispatch(decksActions.addCardToDeck(data));
			goBack();
		});
	});
}
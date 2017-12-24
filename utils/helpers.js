import {AsyncStorage} from 'react-native';
import initialDeck from './initialDeck';
import * as decksActions from '../actions/decks';

const KEY = "DECKS";

export var getDecks = () => dispatch => {
	AsyncStorage.setItem(KEY, JSON.stringify(initialDeck)).then(() => {
		AsyncStorage.getItem(KEY).then(res => JSON.parse(res)).then(data => dispatch(decksActions.getDecks(data)));
	});
}
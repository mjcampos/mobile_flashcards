import {AsyncStorage} from 'react-native';
import initialDeck from './initialDeck';

const KEY = "DECKS";

export var getDecks = () => {
	// AsyncStorage.getItem(KEY).then(res => console.log(res));
	console.log("getDecks");
}

export var setDecks = () => {
	AsyncStorage.setItem(KEY, JSON.stringify(initialDeck)).then(() => {
		AsyncStorage.getItem(KEY).then(res => JSON.parse(res)).then(data => data);
	});
}
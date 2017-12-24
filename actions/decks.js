import {GET_DECKS} from './types';

export var getDecks = (decks) => {
	return {
		type: GET_DECKS,
		decks
	}
}
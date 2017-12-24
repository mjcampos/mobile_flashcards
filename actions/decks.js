import {GET_DECKS, SAVE_DECK_TITLE} from './types';

export var getDecks = (decks) => {
	return {
		type: GET_DECKS,
		decks
	}
}

export var saveDeckTitle = (data) => {
	return {
		type: SAVE_DECK_TITLE,
		data
	}
}
import {GET_DECKS, SAVE_DECK_TITLE, ADD_CARD_TO_DECK} from './types';

export var getDecks = decks => {
	return {
		type: GET_DECKS,
		decks
	}
}

export var saveDeckTitle = data => {
	return {
		type: SAVE_DECK_TITLE,
		data
	}
}

export var addCardToDeck = data => {
	return {
		type: ADD_CARD_TO_DECK,
		data
	}
}
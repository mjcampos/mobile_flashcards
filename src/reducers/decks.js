import * as types from '../actions/types';

function decksReducer(state = {}, action) {
	switch(action.type) {
		case types.GET_DECKS:
			return action.decks;
		case types.SAVE_DECK_TITLE:
			return action.data;
		case types.ADD_CARD_TO_DECK:
			return action.data
		default:
			return state;
	}
}

export default decksReducer;
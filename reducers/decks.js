import * as types from '../actions/types';

function decksReducer(state = {}, action) {
	switch(action.type) {
		case types.GET_DECKS:
			return action.decks;
		default:
			return state;
	}
}

export default decksReducer;
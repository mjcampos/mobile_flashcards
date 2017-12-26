import {StackNavigator} from 'react-navigation';
import DeckList from './DeckList';
import Deck from './Deck';
import TabNavigation from './TabNavigation';

const ModalStack = StackNavigator({
	Home: {
		screen: TabNavigation,
		navigationOptions: {
			header: null,
			headerTitle: "Home"
		}
	},
	Profile: {
		screen: Deck
	}
});

export default ModalStack;
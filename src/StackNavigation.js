import {StackNavigator} from 'react-navigation';
import AddCard from './AddCard';
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
	Deck: {
		screen: Deck
	},
	AddCard: {
		screen: AddCard,
		navigationOptions: {
			title: "Add Card"
		}
	}
});

export default ModalStack;
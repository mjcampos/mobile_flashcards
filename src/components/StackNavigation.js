import {StackNavigator} from 'react-navigation';
import AddCard from './AddCard';
import Deck from './Deck';
import Quiz from './Quiz';
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
	},
	Quiz: {
		screen: Quiz,
		navigationOptions: ({navigation}) => ({
			title: navigation.state.params.title
		})
	}
});

export default ModalStack;
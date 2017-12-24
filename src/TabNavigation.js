import {TabNavigator} from 'react-navigation';
import DeckList from './DeckList';
import NewDeck from './NewDeck';

const RootTabs = TabNavigator({
	DeckList: {
		screen: DeckList,
		navigationOptions: {
			title: "Deck List"
		}
	},
	NewDeck: {
		screen: NewDeck,
		navigationOptions: {
			title: "New Deck"
		}
	}
	}, {
		tabBarPosition: 'top',
		tabBarOptions: {
			labelStyle: {
				fontSize: 20
			},
			style: {
				paddingTop: 70
			}
		}
	}
);

export default RootTabs;
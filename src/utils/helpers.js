import {AsyncStorage, Keyboard} from 'react-native';
import initialDeck from './initialDeck';
import * as decksActions from '../actions/decks';
import { Notifications, Permissions } from 'expo';

const KEY = "DECKS";

export var getDecks = () => dispatch => {
	AsyncStorage.getItem(KEY).then(res => JSON.parse(res)).then(data => dispatch(decksActions.getDecks(data)));
}

export var saveDeckTitle = (title, navigate) => dispatch => {
	AsyncStorage.getItem(KEY).then(res => JSON.parse(res)).then(data => {
		data[title] = {
			title,
			questions: []
		}

		AsyncStorage.setItem(KEY, JSON.stringify(data)).then(() => {
			dispatch(decksActions.saveDeckTitle(data));
			navigate('Deck', {title});
		});
	});
}

export var addCardToDeck = (title, questionObj, goBack) => dispatch => {
	AsyncStorage.getItem(KEY).then(res => JSON.parse(res)).then(data => {
		data[title].questions.push(questionObj)

		AsyncStorage.setItem(KEY, JSON.stringify(data)).then(() => {
			dispatch(decksActions.addCardToDeck(data));
			goBack();
		});
	});
}

export var resetDecks = () => dispatch => {
	AsyncStorage.setItem(KEY, JSON.stringify(initialDeck)).then(() => {
		AsyncStorage.getItem(KEY).then(res => JSON.parse(res)).then(data => dispatch(decksActions.getDecks(data)));
	});
}

export var resetNotifications = () => {
	Notifications.cancelAllScheduledNotificationsAsync();

	var tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	tomorrow.setHours(20);
	tomorrow.setMinutes(0);

	Notifications.scheduleLocalNotificationAsync({
		title: "Quiz Time!",
		body: "Don't forget to quiz yourself today!"
	}, {
		time: tomorrow,
		repeat: 'day'
	});
}
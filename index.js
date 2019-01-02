/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './store';
import App from './App';

const CustomerConnect = () => (
	<Provider store={store}>
		<App />
	</Provider>
)
AppRegistry.registerComponent(appName, () => CustomerConnect);

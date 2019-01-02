import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
		console.log('Footer props', props);
	}
	render() {
		console.log('rendering Footer');
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Tim Tolleson Design™</Text>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
	},
	text: {
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center'
	}
})
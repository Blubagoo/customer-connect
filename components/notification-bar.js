import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class NotificationBar extends React.Component {
	render() {
		return (
			<View style={styles.notificationArea}>
				<View style={styles.notificationBar}>
					<Text style={{textAlign: 'center',color: '#FFFFFD'}}>Messages</Text>
				</View>
				<View style={styles.notificationBar}>
					<Text style={{textAlign: 'center',color: '#FFFFFD'}}>Alerts</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create ({
	notificationArea: {
		height: 25,
		flexDirection: 'row',
		justifyContent: 'space-between',


	},
	notificationBar: {
		height: 25,
		flex: 1,
		backgroundColor: 'rgba(9, 67, 79, .6)',
		borderWidth: 1,
		borderColor: '#FFFFFD',
		color: '#FFFFFD',
	}
})
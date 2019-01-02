import React from 'react';
import {Platform, StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';
import { changeView } from '../actions';
import { connect } from 'react-redux';

export class Header extends React.Component {
	constructor(props) {
		super(props);
		console.log('header props', props);
	}
	login() {
		console.log('logging in', this.props.userType)
		this.props.dispatch(changeView('DASHBOARD', this.props.userType))
	}

	render() {
		console.log('rendering header');
		switch(this.props.view) {
			case 'DASHBOARD':
				return (
					<View style={{backgroundColor: '#1AB2D1', height: 75}}>
						<View style={{flex: 1, flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
							<Text style={{color: '#FFFFFD', fontSize: 30,}}>Customer Connect</Text>
						</View>
					</View>
				)
			default:
				return (
					<View style={{backgroundColor: '#1AB2D1', height: 75}}>
						<View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',}}>
							<Text style={styles.header}>Customer Connect</Text>
							<TouchableOpacity onPress={this.login.bind(this)}>
								<View style={styles.loginArea}>
									<Text style={{color: '#FFFFFD'}}>LOGIN</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				)
		}
	}
}

const styles = StyleSheet.create({
  header: {
  	color: '#FFFFFD',
  	fontSize: 30,
  	padding: 15,
  	paddingRight: 50,

  },
  loginArea: { 
		borderLeftWidth: 1, 
		height: 75, 
		borderColor: '#FFFFFD', 
		alignItems: 'center', 
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 15,
  },
});

const mapStateToProps = state => ({
	userType: state.userType,
	view: state.view
});

export default connect(mapStateToProps)(Header);

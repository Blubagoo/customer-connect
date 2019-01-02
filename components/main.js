import React from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import Register from './register';
import Dashboard from './dashboard';
import { changeView } from '../actions';

export class Main extends React.Component {
	constructor(props) {
		super(props);
		console.log('Main props', props);
		this.state = {
			username: '',
			password: ''
		}
	}
	employeeRegister() {
		console.log('changing view for employee registration');
		this.props.dispatch(changeView('LANDING', 'employee'))
	}
	customerRegister() {
		console.log('changing view for customer registration');
		this.props.dispatch(changeView('LANDING', 'customer'))
	}
	businessRegister() {
		console.log('changing view for business registration');
		this.props.dispatch(changeView('LANDING', 'business'))
	}
	handleSubmit() {
		console.log('submitting user and pass');
		fetch()
	}
	render() {
		console.log('rendering view', this.props.view);
		switch(this.props.view) {
			case 'REGISTRATION':
			console.log('view registration')
				return (
					<View>
						<Register />
					</View>
				);
			case 'DASHBOARD':
				return (
					<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
						<Dashboard userType={this.props.userType} />
					</View>
				)
			case 'LOGIN':
				return (
					<View>
						<Text>Username</Text>
						<View style={{flexDirection: 'row'}}>							
							<TextInput
				        style={styles.textInput}
				        onChangeText={(text) => this.setState({text})}
				        value={this.state.username}
				      />
				    </View>
				    <Text>Password</Text>
				    <View>
				      <TextInput
				        style={styles.textInput}
				        onChangeText={(text) => this.setState({text})}
				        value={this.state.password}
				      />
						</View>
						<Button style={{backgroundColor: '#1AB2D1'}} title={'submit'} />
					</View>
				)
			default: 
				return (
					<View style={{alignItems: 'center'}}>
						<Text style={{marginBottom: 25, padding: 20, textAlign: 'center', lineHeight: 20}}>Already <Text style={{color: '#DA941E'}}>registered?</Text> Click the login button above. Choose from the options below to register.</Text>
						<View style={{flexDirection: 'row'}}>
							<TouchableOpacity  onPress={this.employeeRegister.bind(this)}>
								<View style={styles.panel}>
									<Image 
										source={require('./images/employees.png')}
										style={{width: 100, height: 100}} />
									<Text style={styles.textWarning}>Employee</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.businessRegister.bind(this)}>
								<View style={styles.panel}>
									<Image 
										source={require('./images/organization.png')}
										style={{width: 100, height: 100}} />
									<Text style={styles.textWarning}>Business</Text>
								</View>
							</TouchableOpacity>
						</View>
						<TouchableOpacity onPress={this.customerRegister.bind(this)}>
							<View style={styles.panel}>
								<Image 
									source={require('./images/support.png')}
									style={{width: 100, height: 100}} />
								<Text style={styles.textWarning}>Customer</Text>
							</View>
						</TouchableOpacity>
					</View>
				)
		}
	}
}

const mapStateToProps = state => ({
	info: state.info,
	view: state.view
})

export default connect(mapStateToProps)(Main)

const styles = StyleSheet.create({
	panel: {
		borderWidth: 4,
		borderRadius: 15,
		borderColor: '#DA941E',
		alignItems: 'center',
		padding: 10,
		margin: 10,
	},
	textWarning: {
		paddingTop: 10,
		color: '#DA941E'
	},
	textInput: {
		width: 200,
		borderColor: 'gray', 
		borderWidth: 1,
		margin: 20
	},
})
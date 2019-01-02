import React from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';

export class Register extends React.Component {
	constructor(props) {
		super(props);
		console.log('register props', props)
	}
	render() {
		switch(this.props.regType) {
			case 'employee':
				return (
					<View>
						<Text>Employee registration form</Text>
					</View>
				);
			case 'business':
				return (
					<View>
						<Text>Business registration form</Text>
					</View>
				)
			case 'customer':
				return (
					<View>
						<Text>Customer registration form</Text>
					</View>
				)
			default: 
				return console.log('invalid regType');
		}
	}
}

const mapStateToProps = state => ({
	regType: state.regType
})

export default connect(mapStateToProps)(Register);

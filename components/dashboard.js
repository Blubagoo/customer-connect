import React from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import EmployeeDashboard from './employee-dashboard';
import BusinessDashboard from './business-dashboard';
import CustomerDashboard from './customer-dashboard';

export class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the dashboard props', props);


	}
	render() {
		switch(this.props.userType) {
			case 'employee': 
				return (
					<View style={{flexDirection: 'row', flex: 1}}>
						<EmployeeDashboard />
					</View>
				);
			case 'business':
				return (
					<View style={{flexDirection: 'row', flex: 1}}>
						<BusinessDashboard />
					</View>
				)
			case 'customer':
				return (
					<View style={{flexDirection: 'row', flex: 1}}>
						<CustomerDashboard />
					</View>
				)
			default:
				return console.log('invalid user type');
		}
	}
}

const mapStateToProps = state => ({
	userType: state.userType,
	name: state.name
});

export default connect(mapStateToProps)(Dashboard);

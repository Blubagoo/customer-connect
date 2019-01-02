import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

export class EmployeeDashboard extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the EmployeeDashboard props', props);

	}
	gotoInvoices() {

	}
	gotoWorkOrders() {

	}
	gotoRequestAdjustArrivalTime() {

	}
	gotoBreak() {

	}
	gotoContactCustomer() {

	}
	gotoTimeOff() {

	}
	render() {
		return (
			<View style={styles.container}>
				<View>	
					<View style={styles.header}>
						<Text style={styles.title}>Dashboard</Text>
						<Text style={{borderLeftWidth: 1, borderColor: '#9D5F4B', paddingLeft: 20, fontSize: 14}}>Welcome, <Text style={{color: '#DA941E'}}>{this.props.name}</Text></Text>
					</View>
					<View>
						<View style={styles.main}>
							<TouchableOpacity onPress={this.gotoInvoices.bind(this)}>
								<Text style={{margin:10, fontSize: 20, color: '#DA941E', fontWeight: 'bold',}}>Invoices</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.gotoWorkOrders.bind(this)}>
								<Text style={{margin:10, fontSize: 20, color: '#DA941E', fontWeight: 'bold',}}>Work Orders</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.gotoRequestAdjustArrivalTime.bind(this)}>
								<Text style={{margin:10, fontSize: 20, color: '#DA941E', fontWeight: 'bold',}}>Adjust Arrival Time</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.gotoBreak.bind(this)}>
								<Text style={{margin:10, fontSize: 20, color: '#DA941E', fontWeight: 'bold',}}>Take Break</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.gotoContactCustomer.bind(this)}>
								<Text style={{margin:10, fontSize: 20, color: '#DA941E', fontWeight: 'bold',}}>Contact Customer</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.gotoTimeOff.bind(this)}>
								<Text style={{margin:10, fontSize: 20, color: '#DA941E', fontWeight: 'bold',}}>Request Time Off</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
		paddingLeft: 20,
	},
	header: { 
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		padding: 20,
		borderBottomWidth: 2,
		borderColor: '#9D5F4B'

	},
	title: {
		fontSize: 32,
	},
	main: {
		padding: 20,
		paddingLeft: 40,

	},

})

const mapStateToProps = state => ({
	name: state.name
})

export default connect(mapStateToProps)(EmployeeDashboard);

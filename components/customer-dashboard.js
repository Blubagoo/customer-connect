import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

export class CustomerDashboard extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the CustomerDashboard props', props);
	}
	gotoInvoices() {
		console.log('going to invoices');
	}
	gotoScheduledWork() {
		console.log('going to Scheduled work');
	}
	gotoRequestAppointment() {
		console.log('requesting appointment');
	}
	gotoMessages() {
		console.log('checking messages');
	}
	gotoItemReview() {
		console.log('goto item review');
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
							<TouchableOpacity onPress={this.gotoScheduledWork.bind(this)}>
								<Text style={{margin:10, fontSize: 20, color: '#DA941E', fontWeight: 'bold',}}>Scheduled Work</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.gotoRequestAppointment.bind(this)}>
								<Text style={{margin:10, fontSize: 20, color: '#DA941E', fontWeight: 'bold',}}>Request Appointment</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.gotoMessages.bind(this)}>
								<Text style={{margin:10, fontSize: 20, color: '#DA941E', fontWeight: 'bold',}}>Messages</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.gotoItemReview.bind(this)}>
								<Text style={{margin:10, fontSize: 20, color: '#DA941E', fontWeight: 'bold',}}>Items needing review</Text>
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

export default connect(mapStateToProps)(CustomerDashboard);

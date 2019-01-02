import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';

import Header from './components/header';
import Main from './components/main';
import Footer from'./components/footer';
import NotificationBar from './components/notification-bar';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export class App extends React.Component {
  render() {
    switch(this.props.view) {
      case 'DASHBOARD':
        return (
          <View  style={{justifyContent: 'space-between', flex: 1}}>
            <View>
              <View>
                <Header />
              </View>
              <View>
                <NotificationBar />
              </View>
            </View>
            <Main />
            <Footer />
          </View>
        );
      default:
      return (
        <View style={{justifyContent: 'space-between', flex: 1}}>
          <Header />
          <Main />
          <Footer />
        </View>
      );
    }  
  }
}
const mapStateToProps = state => ({
  view: state.view
})
export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({

});

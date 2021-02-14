/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles/index';
import {NavigationActions} from 'react-navigation';

export default class Home extends Component {
  navigateToScreen = route => () => {
    const navigationAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigationAction);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Home</Text>
        {/* <Text
          onPress={this.navigateToScreen('OtherNavigator')}
          style={styles.heading}>
          Other Navigator
        </Text> */}
      </View>
    );
  }
}

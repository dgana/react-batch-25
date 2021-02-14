/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import styles from '../../styles/index';
import {NavigationActions} from 'react-navigation';

export default class Home extends Component {
  state = {
    search: '',
  };

  navigateToScreen = route => () => {
    const navigationAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigationAction);
  };

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.b1}>
          <View style={styles.topHeader}>
            <SearchBar
              placeholder="Type Here..."
              onChangeText={this.updateSearch}
              value={search}
            />
          </View>
        </View>
        <View style={styles.b2}>
          <Text>Home</Text>
        </View>
      </View>
    );
  }
}

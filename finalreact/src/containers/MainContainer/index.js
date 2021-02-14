import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import ListingsProd from '../../components/ListingsProd';

export default class MainContainer extends Component {
  render() {
    return (
      <View>
        <ListingsProd />
      </View>
    );
  }
}

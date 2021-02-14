import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.searchContainer}>
          <Text style={styles.cari}>Search</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '100%',
    height: 80,
  },
  cari: {
    margin: 10,
  },
  searchContainer: {
    display: 'flex',
    borderWidth: 1,
    borderColor: 'rgb(150,150,150)',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 3,
    height: 40,
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
  },
});

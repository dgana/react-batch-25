import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export default class DaftarBarang extends Component {
  render() {
    return (
      <View style={mystyle.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={mystyle.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const mystyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

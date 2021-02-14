import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

import SearchBar from '../../components/SearchBar';

import categoriesList from '../../data/datacategories';
import colors from '../../styles/color';
import daftar from '../../data/daftar';

export default class DetailContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Detail Product',
  };

  render() {
    const foto = require('../../data/foto/detail01.jpg');
    return (
      <View style={styles.wrapper}>
        <ScrollView
          style={styles.styscrollview}
          contentContainerStyle={styles.scrollViewContent}>
          {/* <SearchBar /> */}
          <Image style={styles.image} source={foto} />
          <Text style={styles.heading}>Explore Airbnb</Text>
          <View>
            <Text style={styles.deskripsi}>
              4 tamu · 1 kamar tidur · 1 tempat tidur · 1 kamar mandi + ruang
              toilet
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  styscrollview: {
    paddingTop: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 10,
  },

  image: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    marginBottom: 7,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    color: colors.gray04,
  },
  deskripsi: {
    margin: 10,
    fontSize: 18,
  },
});

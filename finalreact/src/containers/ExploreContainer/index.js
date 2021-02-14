import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import SearchBar from '../../components/SearchBar';
import CategoriesProd from '../../components/CategoriesProd';
import ListingsProd from '../../components/ListingsProd';

import categoriesList from '../../data/datacategories';
import colors from '../../styles/color';
import daftar from '../../data/daftar';

export default class ExploreContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Explore Product',
  };

  renderListing() {
    return daftar.map((row, index) => (
      <View key={`row-${index}`}>
        <ListingsProd
          key={`row-item-${index}`}
          title={row.title}
          daftar={row.subdaftar}
          boldTitle={row.boldTitle}
        />
      </View>
    ));
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.wrapper}>
        <ScrollView
          style={styles.styscrollview}
          contentContainerStyle={styles.scrollViewContent}>
          <SearchBar />
          <Text
            style={styles.heading}
            onPress={() => navigate('RdetailContainer')}>
            Explore Airbnb
          </Text>
          <View style={styles.categories}>
            <CategoriesProd listcategories={categoriesList} />
          </View>
          {this.renderListing()}
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
    paddingBottom: 80,
  },
  categories: {
    marginBottom: 40,
    // height: 150,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    color: colors.gray04,
  },
});

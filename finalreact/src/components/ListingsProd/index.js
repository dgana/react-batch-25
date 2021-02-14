import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';
import {createAppContainer} from 'react-navigation';

export default class ListingsProd extends Component {
  constructor(props) {
    super(props);
  }

  renderListings() {
    const {daftar} = this.props;
    return daftar.map((row, index) => (
      <TouchableHighlight style={styles.card} key={`row-${index}`}>
        <View>
          <Image style={styles.image} resizeMode="contain" source={row.foto} />
          <Text style={styles.listingTitle}>{row.title}</Text>
          <Text style={styles.listingTitle}>${row.price} / malam</Text>
        </View>
      </TouchableHighlight>
    ));
  }
  render() {
    const {title} = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.judul}>{title}</Text>
          <TouchableOpacity style={styles.seeAllBtn}>
            <Text style={styles.seeAllBtnText}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{paddingRight: 30}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {this.renderListings()}
        </ScrollView>
      </View>
    );
  }
}

ListingsProd.propTypes = {
  daftar: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  judul: {
    fontSize: 18,
    fontWeight: '700',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 21,
    paddingRight: 21,
  },
  scrollView: {
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 40,
  },
  card: {
    marginRight: 6,
    marginLeft: 6,
    width: 157,
    flexDirection: 'column',
    minHeight: 100,
  },
  image: {
    width: 100,
    flex: 1,
    height: 100,
    borderRadius: 8,
    marginBottom: 7,
  },
  listingTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: 'rgb(50,50,50)',
    marginTop: 2,
  },
  seeAllBtnText: {
    color: 'rgb(50,50,50)',
    marginRight: 5,
  },
});

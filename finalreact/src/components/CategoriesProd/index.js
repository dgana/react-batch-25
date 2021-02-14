import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Image,
} from 'react-native';

export default class CategoriesProd extends Component {
  constructor(props) {
    super(props);
  }

  get Categories() {
    const {listcategories} = this.props;

    return listcategories.map((category, index) => {
      return (
        <TouchableHighlight style={styles.stycard}>
          <Image source={category.photo} style={styles.styimage} />
        </TouchableHighlight>
      );
    });
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.wrapper}
        horizontal={true}
        showHorizontalScrollIndicator={false}>
        {this.Categories}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stycard: {
    display: 'flex',
    flexDirection: 'column',
    width: 110,
    height: 110,
    marginRight: 8,
    marginLeft: 8,
  },
  styimage: {
    flex: 1,
    width: '100%',
  },
});

import React, {Component} from 'react';
// import propTypes from 'props-types';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import styles from '../../styles/gaya';

export default class RoundedButton extends Component {
  render() {
    const {text, backgroundColor, color, handleOnPress} = this.props;

    return (
      <TouchableHighlight
        style={[{backgroundColor}, styles.wrapperBtn]}
        onPress={handleOnPress}>
        <Text style={[{color}, styles.buttonText]}>{text}</Text>
      </TouchableHighlight>
    );
  }
}

// RoundedButton.propTypes = {
//   text: propTypes.string.isRequired,
// };

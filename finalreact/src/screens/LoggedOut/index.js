import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight, ScrollView} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../../styles/gaya';
import warna from '../../styles/color';
import RoundedButton from '../../komponen/RoundedButton';

export default class LoggedOut extends Component {
  onFacebookPress() {
    alert('Tombol Facebook ditekan');
  }

  onCreateAccountPress() {
    alert('Tombol Create Account ditekan');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
            style={styles.logo}
            source={require('../../img/airbnb-logo.jpg')}
          />
          <Text style={styles.welcomeText}>
            Welcome to Airbnb Clone with React Native
          </Text>
          <RoundedButton
            text="*Connect to Facebook*"
            color={warna.merah}
            backgroundColor={warna.white}
            handleOnPress={this.onFacebookPress}
          />
          <RoundedButton
            text="Create Account"
            color={warna.merah}
            backgroundColor={warna.white}
            handleOnPress={this.onCreateAccountPress}
          />
        </View>
      </View>
    );
  }
}

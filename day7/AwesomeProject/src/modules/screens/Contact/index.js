/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../../styles/index';

const profilePicture =
  'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.226xh&resize=480:*';

export default class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}>
          <Image style={styles.image} source={{uri: profilePicture}} />
          <Text style={styles.description}>Damon</Text>
        </View>
        <View style={styles.box2}>
          <View style={styles.innerBox}>
            <Text style={styles.heading}>Name :</Text>
            <Text style={styles.profile}>Gana</Text>
          </View>
          <View style={styles.innerBox}>
            <Text style={styles.heading}>Address :</Text>
            <Text style={styles.profile}>Jl. Kemang IC no.2</Text>
          </View>
          <View style={styles.innerBox}>
            <Text style={styles.heading}>Gender :</Text>
            <Text style={styles.profile}>Male</Text>
          </View>
          <View style={styles.innerBox}>
            <Text style={styles.heading}>Birth Date :</Text>
            <Text style={styles.profile}>12 January 1989</Text>
          </View>
          <View style={styles.innerBox}>
            <Text style={styles.heading}>Education :</Text>
            <Text style={styles.profile}>Hacktiv8</Text>
          </View>
        </View>
        {/* <Text style={styles.heading}>Contact Us</Text> */}
      </View>
    );
  }
}

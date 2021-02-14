import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import warna from '../../styles/color';
import {View, Image, Modal, StyleSheet} from 'react-native';

export default class Loader extends Component {
  render() {
    const {animationType, modalVisible} = this.props;
    return (
      <Modal
        animationType={animationType}
        transparent={true}
        visible={modalVisible}>
        <View style={styles.wrapper}>
          <View>
            <Image
              style={styles.loaderImage}
              source={require('../../img/loading-200px.gif')}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

Loader.propTypes = {
  animationType: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 9,
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    width: 80,
    height: 80,
    top: '50%',
    left: '50%',
    marginLeft: -40,
    marginTop: -40,
  },
  loaderImage: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },
});

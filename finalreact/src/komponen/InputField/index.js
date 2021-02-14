import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {
  Button,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import colors from '../../styles/color';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput:
        props.inputType === 'text' || props.inputType === 'email'
          ? false
          : true,
    };
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  }

  toggleShowPassword() {
    this.setState({secureInput: !this.state.secureInput});
  }

  render() {
    const {labelText, inputType, onChangeText} = this.props;
    const {secureInput} = this.state;
    return (
      <View>
        <Text style={styles.label}>{labelText}</Text>
        {inputType === 'password' ? (
          <TouchableOpacity
            onPress={this.toggleShowPassword}
            style={styles.showButton}>
            <Text style={styles.showButtonText}>
              {secureInput ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        ) : null}
        <TextInput
          style={[styles.inputField]}
          secureTextEntry={secureInput}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    color: colors.white,
  },
  label: {
    color: colors.white,
  },
  showButton: {
    position: 'absolute',
    right: 0,
  },
  showButtonText: {
    color: colors.white,
  },
});

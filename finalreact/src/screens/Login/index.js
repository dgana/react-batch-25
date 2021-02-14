import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {
  Button,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import colors from '../../styles/color';
import InputField from '../../komponen/InputField';
import Loader from '../Loader';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      validEmail: false,
      validPass: false,
      loadingVisible: true,
    };
  }

  static navigationOptions = {
    title: 'Silahkan Login',
  };

  cekEmail = email => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.setState({emailAddress: email});
    if (emailRegex.test(email)) {
      this.setState({validEmail: true});
    } else {
      this.setState({validEmail: false});
    }
  };

  cekPassword = mypass => {
    if (mypass.length > 4) {
      this.setState({validPass: true});
    } else {
      this.setState({validPass: false});
    }
  };

  siapLogin = () => {
    return this.props.navigation.navigate('RexploreContainer');

    const {validEmail, validPass} = this.state;
    if (validEmail && validPass) {
      alert('valid');
      return true;
    }
    alert('tidak valid ' + validEmail + ' dan ' + validPass);

    return false;
  };

  render() {
    const {loadingVisible} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.scrollViewWrapper}>
          <ScrollView>
            <Text style={styles.loginHeader}>Log In</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              inputType="email"
              onChangeText={this.cekEmail}
            />
            <InputField
              labelText="PASSWORD"
              inputType="password"
              onChangeText={this.cekPassword}
            />

            <View style={styles.btnArea}>
              <Button title="Submit" onPress={this.siapLogin} />
            </View>
            <View style={styles.btnArea}>
              <Button
                style={styles.styForgetPass}
                title="Forget Password"
                onPress={() => navigate('RforgetPass')}
                // onPress={() => this.props.navigation.navigate('ForgetPass')}
              />
            </View>
            {/* <Text
              onPress={() => navigate('ForgetPass', {name: 'Jane'})}>
              Forget Password
            </Text> */}
          </ScrollView>
        </View>
        {/* <Loader modalVisible={loadingVisible} animationType="fade" /> */}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.green01,
  },
  scrollViewWrapper: {
    marginTop: 70,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
  btnArea: {
    marginTop: 10,
  },
  loginHeader: {
    fontSize: 26,
    color: colors.white,
  },
  styForgetPass: {
    color: colors.white,
    marginTop: 30,
    paddingTop: 15,
  },
  label: {
    color: colors.white,
  },
});

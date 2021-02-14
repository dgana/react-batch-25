import React, {Component} from 'react';
import {View, Text, KeyboardAvoidingView, StyleSheet} from 'react-native';
import colors from '../../styles/color';
import InputField from '../../komponen/InputField';
import {StackNavigator} from 'react-navigation';

export default class ForgetPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      loadingVisible: false,
      validEmail: false,
      emailAddress: '',
    };
  }

  static navigationOptions = {
    title: 'Lupa Password',
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

  render() {
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.form}>
          <Text style={styles.forgetPassHeading}>Forget Your Password</Text>
          <Text style={styles.forgetPassSubhead}>
            Enter your email to find your account
          </Text>
          <InputField labelText="Email" inputType="email" />

          <Text
            style={styles.forgetPassSubhead}
            onPress={() => navigate('Rlogin')}>
            Kembali
          </Text>
        </View>
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
  forgetPassHeading: {
    fontSize: 28,
    color: colors.white,
    fontWeight: '300',
  },
  form: {
    marginTop: 90,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  forgetPassSubhead: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 60,
  },
});

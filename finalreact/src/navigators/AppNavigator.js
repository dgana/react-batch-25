import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import CustomDrawerNavigator from '../components/CustomDrawerNavigator';
import LoginScreen from '../screens/Login';
import ForgetPassScreen from '../screens/ForgetPass';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  ForgetPass: {screen: ForgetPassScreen},
});

// const MainNavigator = createDrawerNavigator(
//   {
//     Login: {
//       navigationOptions: {
//         headerTintColor: '#fff',
//         drawerLabel: 'Login',
//       },
//       screen: LoginScreen,
//     },
//     ForgetPass: {
//       screen: ForgetPassScreen,
//     },
//   },
//   {
//     contentComponent: CustomDrawerNavigator,
//   },
// );

const AppNavigator = createAppContainer(MainNavigator);
export default AppNavigator;

// import React from 'react';
// import {StyleSheet, Text, View, Button} from 'react-native';

// export default class Home extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>We have no friends!</Text>
//         <Button
//           title="Add some friends"
//           onPress={() => this.props.navigation.navigate('Friends')}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

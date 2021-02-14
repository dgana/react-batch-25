// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// import AppNavigator from './src/navigators/AppNavigator';

// import LoggedOut from './src/screens/LoggedOut';
// import Login from './src/screens/Login';
// import ForgetPass from './src/screens/ForgetPass';
// import Loader from './src/screens/Loader';

// export default class App extends Component {
//   render() {
//     return <AppNavigator />;
//   }
// }

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Vlogin from './src/screens/Login';
import VforgetPass from './src/screens/ForgetPass';
import VsearchBar from './src/components/SearchBar';
import VexploreContainer from './src/containers/ExploreContainer';
import Vdetailcontainer from './src/containers/DetailContainer';

const MainNavigator = createStackNavigator({
  Rlogin: {screen: Vlogin},
  RforgetPass: {
    screen: VforgetPass,
  },
  RsearchBar: {screen: VsearchBar},
  RexploreContainer: {screen: VexploreContainer},
  RdetailContainer: {screen: Vdetailcontainer},
});

const App = createAppContainer(MainNavigator);

export default App;

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import {TouchableOpacity, Image} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Home from '../screens/Home/index';
import About from '../screens/About/index';
import Contact from '../screens/Contact/index';
import DrawerScreen from '../screens/Common/DrawerScreen';

const Tabs = createMaterialTopTabNavigator(
  {
    Home: Home,
    About: About,
    Contact: Contact,
  },
  {
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#fff',
      },
      indicatorStyle: {
        backgroundColor: '#000',
      },
    },
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Tabs,
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <DrawerScreen {...props} />,
    drawerWidth: 300,
  },
);

const MenuImage = ({navigation}) => {
  if (!navigation.state.isDrawerOpen) {
    return <Image source={require('../images/menu-button.png')} />;
  } else {
    return <Image source={require('../images/left-arrow.png')} />;
  }
};

const StackNavigator = createStackNavigator({
  //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.

  DrawerNavigator: {
    screen: DrawerNavigator,
    navigationOptions: ({navigation}) => ({
      title: 'React Navigation', // Title to appear in status bar
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 12}}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}>
          <MenuImage style="styles.bar" navigation={navigation} />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  },
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;

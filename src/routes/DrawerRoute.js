import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import Screens from '../lib/Screens';
import Colors from '../styles/Colors';
import MenuLateral from '../components/MenuLateral';

import Home from '../screens/Home';
import Login from '../screens/Login';

Icon.loadFont();

const Item = (props) => (
  <View style={{ height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ color: Colors.white, fontSize: 18 }}>{props.name}</Text>
  </View>
);

const ItemIcon = (props) => (<Icon name={props.name} size={22} color={Colors.white} />);

export default createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      drawerIcon: <ItemIcon name="home" />,
      drawerLabel: <Item name="Home" />
    }),
  },
  Login
}, {
  contentComponent: MenuLateral,
  initialRouteName: Screens.home,
  drawerType: 'slide',
});

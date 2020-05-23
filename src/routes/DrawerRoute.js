import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      drawerLabel: <Item name="Tela Inicial" />
    }),
  },
  Visitas: {
    screen: Home,
    navigationOptions: () => ({
      drawerIcon: <ItemIcon name="location-city" />,
      drawerLabel: <Item name="Visitas" />
    }),
  },
  Reunioes: {
    screen: Home,
    navigationOptions: () => ({
      drawerIcon: <ItemIcon name="work" />,
      drawerLabel: <Item name="Reuniões" />
    }),
  },
  Sincronizacao: {
    screen: Home,
    navigationOptions: () => ({
      drawerIcon: <ItemIcon name="sync" />,
      drawerLabel: <Item name="Sincronização" />
    }),
  },
  Ajuda: {
    screen: Home,
    navigationOptions: () => ({
      drawerIcon: <ItemIcon name="help" />,
      drawerLabel: <Item name="Ajuda" />
    }),
  },
  Sair: {
    screen: Login,
    navigationOptions: () => ({
      drawerIcon: <ItemIcon name="exit-to-app" />,
      drawerLabel: <Item name="Sair" />
    }),
  },
}, {
  contentComponent: MenuLateral,
  initialRouteName: Screens.home,
  drawerType: 'slide',
});

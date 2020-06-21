import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Screens from '../lib/Screens';
import Colors from '../styles/Colors';
import MenuLateral from '../components/MenuLateral';

import Login from '../screens/Login';
import HomeRoute from './HomeRoute';
import VisitasRoute from './VisitasRoute';
import ReunioesRoute from './ReunioesRoute';
import SincronizacaoRoute from './SincronizacaoRoute';
import Ajuda from '../screens/Ajuda';

Icon.loadFont();

const Item = (props) => (
  <View style={{ height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ color: Colors.white, fontSize: 18 }}>{props.name}</Text>
  </View>
);

const ItemIcon = (props) => (<Icon name={props.name} size={22} color={Colors.white} />);

export default createDrawerNavigator({
  Home: {
    screen: HomeRoute,
    navigationOptions: () => ({
      drawerIcon: <ItemIcon name="home" />,
      drawerLabel: <Item name="Tela Inicial" />
    }),
  },
  Visitas: {
    screen: VisitasRoute,
    navigationOptions: () => ({
      drawerIcon: <ItemIcon name="location-city" />,
      drawerLabel: <Item name="Visitas" />
    }),
  },
  Reunioes: {
    screen: ReunioesRoute,
    navigationOptions: () => ({
      drawerIcon: <ItemIcon name="work" />,
      drawerLabel: <Item name="Reuniões" />
    }),
  },
  Sincronizacao: {
    screen: SincronizacaoRoute,
    navigationOptions: () => ({
      drawerIcon: <ItemIcon name="sync" />,
      drawerLabel: <Item name="Sincronização" />
    }),
  },
  Ajuda: {
    screen: Ajuda,
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

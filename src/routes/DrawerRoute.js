import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomDrawerContent from './DrawerCustom';
import Login from '../screens/Login';
import HomeRoute from './HomeRoute';
import VisitasRoute from './VisitasRoute';
import ReunioesRoute from './ReunioesRoute';
import SobreRoute from './SobreRoute';
import Colors from '../styles/Colors';

Icon.loadFont();

const Drawer = createDrawerNavigator();

export default function DrawerRouter () {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{ backgroundColor: Colors.primaryColor }}
      drawerContentOptions={{
        activeTintColor: Colors.white,
        activeBackgroundColor: Colors.primaryColor,
        inactiveTintColor: Colors.cinza,
        inactiveBackgroundColor: Colors.primaryColor,
        labelStyle: {
          fontSize: 18
        }
      }}
    >

      <Drawer.Screen
        name='Inicio'
        component={HomeRoute}
        options={{
          title: 'Tela inicial',
          drawerIcon: () => <Icon name="home" size={22} color='#fff' />
        }}
      />

      <Drawer.Screen
        name='Visitas'
        component={VisitasRoute}
        options={{
          title: 'Visitas',
          drawerIcon: () => <Icon name="location-city" size={22} color='#fff' />
        }}
      />

      <Drawer.Screen
        name='Reunioes'
        component={ReunioesRoute}
        options={{
          title: 'Reuniões',
          drawerIcon: () => <Icon name="work" size={22} color='#fff' />
        }}
      />

      <Drawer.Screen
        name='Sobre'
        component={SobreRoute}
        options={{
          title: 'Sobre',
          drawerIcon: () => <Icon name="help" size={22} color='#fff' />
        }}
      />

      <Drawer.Screen
        name='Login'
        component={Login}
        options={{
          title: 'Sair',
          drawerIcon: () => <Icon name="exit-to-app" size={22} color='#fff' />
        }}
      />

    </Drawer.Navigator>
  );
}

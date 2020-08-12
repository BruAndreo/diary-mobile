import React from 'react';
import { View, StatusBar } from 'react-native';
//import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Screens from '../lib/Screens';
import Colors from '../styles/Colors';

import Sincronizacao from '../screens/Sincronizacao';
/*
Icon.loadFont();

const MenuIcon = (props) => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#123456" />
    <View>
      <Icon onPress={() => props.navigation.openDrawer()} name="menu" size={30} color={Colors.white} style={{marginLeft: 10}} />
    </View>
  </>
);

export default createStackNavigator({
  Sincronizacao: {
    screen: Sincronizacao,
    navigationOptions: ({ navigation }) => ({
      title: 'Sincronização',
      drawerLockMode: 'unlocked',
      headerLeft: () => <MenuIcon navigation={navigation} />
    })
  }
}, {
  initialRouteName: Screens.sincronizacao,
  defaultNavigationOptions: {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: Colors.white,
  },
});
*/

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function SincronizacaoRoute() {
  return (
    <Stack.Navigator initialRouteName='Sincronizacao'>
      <Stack.Screen name="Sincronizacao" component={Sincronizacao} options={{ headerShown: true, title: 'Sincronizacões' }} />
    </Stack.Navigator>
  );
}

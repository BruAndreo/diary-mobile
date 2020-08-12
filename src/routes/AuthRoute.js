import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import Login from '../screens/Login';
import DrawerRoute from './DrawerRoute';
import Home from '../screens/Home';

/*
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Screens from '../lib/Screens';

import Home from '../screens/Home';

const authRoute = createSwitchNavigator({
    Login,
    Home,
    DrawerRoute
},
{
    initialRouteName: Screens.login
});

export default createAppContainer(authRoute);
*/

const Stack = createStackNavigator();

export default function authRoute() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#123456" />
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="DrawerRoute" component={DrawerRoute} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

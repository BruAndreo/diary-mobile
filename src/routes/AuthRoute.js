import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import DrawerRoute from './DrawerRoute';

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
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="drawerRoute" component={DrawerRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

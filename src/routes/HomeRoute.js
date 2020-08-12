import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import headerStyled from '../components/Menu/HeaderStyled';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function HomeRoute() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={({navigation}) => headerStyled(navigation, 'Tela Inicial')} />
    </Stack.Navigator>
  );
}

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import headerStyled from '../components/Menu/HeaderStyled';
import Home from '../screens/Home';
import Detalhes from '../screens/Detalhes';

const Stack = createStackNavigator();

export default function HomeRoute() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={({navigation}) => headerStyled(navigation, 'Tela Inicial')} />
      <Stack.Screen name="Detalhes" component={Detalhes} options={({navigation}) => headerStyled(navigation, 'Detalhes', false)} />
    </Stack.Navigator>
  );
}

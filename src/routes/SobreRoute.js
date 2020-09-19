import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import headerStyled from '../components/Menu/HeaderStyled';
import Sobre from '../screens/Sobre';

const Stack = createStackNavigator();

export default function SobreRoute() {
  return (
    <Stack.Navigator initialRouteName='Sobre'>
      <Stack.Screen name="Sobre" component={Sobre} options={({navigation}) => headerStyled(navigation, 'Sobre')} />
    </Stack.Navigator>
  );
}

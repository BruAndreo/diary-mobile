import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import headerStyled from '../components/Menu/HeaderStyled';
import Visitas from '../screens/Visitas';

const Stack = createStackNavigator();

export default function VisitasRoute() {
  return (
    <Stack.Navigator initialRouteName='Visitas'>
      <Stack.Screen name="Visitas" component={Visitas} options={({navigation}) => headerStyled(navigation, 'Visitas')} />
    </Stack.Navigator>
  );
}

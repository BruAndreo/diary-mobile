import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import headerStyled from '../components/Menu/HeaderStyled';
import Reunioes from '../screens/Reunioes';

const Stack = createStackNavigator();

export default function ReunioesRoute() {
  return (
    <Stack.Navigator initialRouteName='Reunioes'>
      <Stack.Screen name="Reunioes" component={Reunioes} options={({navigation}) => headerStyled(navigation, 'Reuniões')} />
    </Stack.Navigator>
  );
}

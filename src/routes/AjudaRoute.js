import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import headerStyled from '../components/Menu/HeaderStyled';
import Ajuda from '../screens/Ajuda';

const Stack = createStackNavigator();

export default function SincronizacaoRoute() {
  return (
    <Stack.Navigator initialRouteName='Ajuda'>
      <Stack.Screen name="Ajuda" component={Ajuda} options={({navigation}) => headerStyled(navigation, 'Ajuda')} />
    </Stack.Navigator>
  );
}

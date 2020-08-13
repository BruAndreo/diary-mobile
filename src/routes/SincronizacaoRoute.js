import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import headerStyled from '../components/Menu/HeaderStyled';
import Sincronizacao from '../screens/Sincronizacao';

const Stack = createStackNavigator();

export default function SincronizacaoRoute() {
  return (
    <Stack.Navigator initialRouteName='Sincronizacao'>
      <Stack.Screen name="Sincronizacao" component={Sincronizacao} options={({navigation}) => headerStyled(navigation, 'Sincronizações')} />
    </Stack.Navigator>
  );
}

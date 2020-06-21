import React from 'react';
import { View, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Screens from '../lib/Screens';
import Colors from '../styles/Colors';

import Reunioes from '../screens/Reunioes';

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
  Reunioes: {
    screen: Reunioes,
    navigationOptions: ({ navigation }) => ({
      title: 'Reuniões',
      drawerLockMode: 'unlocked',
      headerLeft: () => <MenuIcon navigation={navigation} />
    })
  }
}, {
  initialRouteName: Screens.reunioes,
  defaultNavigationOptions: {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: Colors.white,
  },
});

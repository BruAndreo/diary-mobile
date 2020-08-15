import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

export default (navigation, screenTitle, drawerActive = true) => {
  const style = {
    headerShown: true,
    title: screenTitle,
    headerTitleAlign: 'center',
    headerStyle: { backgroundColor: '#123456' },
    headerTintColor: '#fff'
  };

  if (drawerActive) {
    style.headerLeft = props => (<Icon name="menu" size={30} color='#fff' style={{marginLeft: 10}} onPress={() => navigation.openDrawer()} />)
  }

  return style;
};

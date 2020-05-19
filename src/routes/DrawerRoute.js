import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../screens/Home';

export default createDrawerNavigator({
  Home
}, {
  initialRouteName: 'Home'
});

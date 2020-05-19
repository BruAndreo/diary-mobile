import { createDrawerNavigator } from 'react-navigation-drawer';
import Screens from '../lib/Screens';
import Colors from '../styles/Colors';
import MenuLateral from '../components/MenuLateral';

import Home from '../screens/Home';
import Login from '../screens/Login';

export default createDrawerNavigator({
  Home,
  Login
}, {
  contentComponent: MenuLateral,
  initialRouteName: Screens.home,
  drawerType: 'slide',
});

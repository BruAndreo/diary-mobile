import { createDrawerNavigator } from 'react-navigation-drawer';
import Screens from '../lib/Screens';

import Home from '../screens/Home';

export default createDrawerNavigator({
  Home
}, {
  initialRouteName: Screens.home
});

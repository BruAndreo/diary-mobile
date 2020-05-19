import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Screens from '../lib/Screens';

import Login from '../screens/Login';
import Home from '../screens/Home';
import DrawerRoute from './DrawerRoute';

const authRoute = createSwitchNavigator({
    Login,
    Home,
    DrawerRoute
},
{
    initialRouteName: Screens.login
});

export default createAppContainer(authRoute);

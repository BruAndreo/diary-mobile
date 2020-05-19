import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from '../screens/Login';
import Home from '../screens/Home';
import DrawerRoute from './DrawerRoute';

const authRoute = createSwitchNavigator({
    Login,
    Home,
    DrawerRoute
},
{
    initialRouteName: 'Login'
});

export default createAppContainer(authRoute);

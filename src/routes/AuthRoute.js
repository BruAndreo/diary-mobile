import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from '../screens/Login';
import Home from '../screens/Home';

const authRoute = createSwitchNavigator({
    Login,
    Home
}, 
{
    initialRouteName: 'Login'
});

export default createAppContainer(authRoute);
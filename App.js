import React from 'react';
import 'react-native-gesture-handler';
import moment from 'moment-timezone';

import AuthRoute from './src/routes/AuthRoute';

moment.tz('America/Sao_Paulo').format();

export default function App() {
  return <AuthRoute />
}

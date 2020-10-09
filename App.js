import React from 'react';
import 'react-native-gesture-handler';
import moment from 'moment-timezone';
import {decode, encode} from 'base-64';

console.disableYellowBox = true;

import AuthRoute from './src/routes/AuthRoute';

moment.tz('America/Sao_Paulo').format();

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

export default function App() {
  return <AuthRoute />
}

import React from 'react';
import { View, Text } from 'react-native';

import Style from './style';

export default CompromissoCard = (props) => {
  return (
    <View style={Style.card}>
      <Text>{props.nomeResponsavel}</Text>
      <Text>{props.nomeEmpresa}</Text>
    </View>
  );
};

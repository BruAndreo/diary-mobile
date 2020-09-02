import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from './style';

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text>Formulario</Text>
      </View>
    );
  }
}

export default Formulario;

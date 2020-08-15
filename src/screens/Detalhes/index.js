import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Detalhes extends Component {

  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <View>
        <Text>Eai, aqui ficará a tela com detalhes!</Text>
      </View>
    );
  }

}

export default Detalhes;

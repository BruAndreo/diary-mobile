import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Sobre extends Component {

  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <View>
        <Text>Você precisa de ajuda?</Text>
      </View>
    );
  }
}

export default Sobre;

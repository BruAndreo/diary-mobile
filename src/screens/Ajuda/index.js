import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Ajuda extends Component {

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

export default Ajuda;

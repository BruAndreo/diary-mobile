import React, { Component } from 'react';
import { View } from 'react-native';

import CompromissosList from '../../components/CompromissosList';
import TypesCompromissos from '../../lib/TiposDeCompromissos';

class Visitas extends Component {

  constructor(props) {
    super(props);

    this.props = props;
  }

  state = {};

  render() {
    return (
      <View>
        <CompromissosList type={TypesCompromissos.VISIT} />
      </View>
    );
  }
}

export default Visitas;

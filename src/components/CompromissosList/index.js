import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import Styles from './style';
import Compromissos from '../../app/Compromissos';

import CompromissoCard from '../CompromissoCard';

class CompromissosList extends Component {

  state = {
    compromissos: []
  };

  constructor(props) {
    super(props);

    this.props = props;
  }

  componentDidMount() {
    const compromissos = new Compromissos();

    this.setState({ compromissos: compromissos.getCompromissos() });
  }

  render() {
    return (
      <View>
        <FlatList
          contentContainerStyle={Styles.lista}
          data={this.state.compromissos}
          renderItem={({item}, idx) => (
            <CompromissoCard key={idx} nomeResponsavel={item.nomeResponsavel} nomeEmpresa={item.nomeEmpresa}/>
          )}
        />
      </View>
    );
  }

}

export default CompromissosList;

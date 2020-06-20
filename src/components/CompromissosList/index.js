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

    this.setCompromissos = this.setCompromissos.bind(this);
  }

  componentWillMount() {
    this.setCompromissos();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.date !== this.props.date) {
      this.setCompromissos();
    }
  }

  setCompromissos() {
    const compromissos = new Compromissos();
    this.setState({ compromissos: compromissos.getCompromissosByDate(this.props.date) });
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

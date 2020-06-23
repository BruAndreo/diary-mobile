import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import moment from 'moment';

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

    moment.locale('pt-br');

    this.setCompromissos = this.setCompromissos.bind(this);
  }

  componentDidMount() {
    this.setCompromissos(this.props.type);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.date !== this.props.date) {
      this.setCompromissos();
    }
  }

  setCompromissos(type = null) {
    const compromissos = new Compromissos();

    if (!type) {
      this.setState({ compromissos: compromissos.getCompromissosByDate(this.props.date) });
    } else {
      this.setState({ compromissos: compromissos.getCompromissos(type) });
    }

  }

  render() {
    return (
      <View>
        <FlatList
          contentContainerStyle={Styles.lista}
          data={this.state.compromissos}
          renderItem={({item}, idx) => (
            <CompromissoCard
              key={idx}
              nomeResponsavel={item.nomeResponsavel}
              nomeEmpresa={item.nomeEmpresa}
              type={item.type}
              endereco={`${item.address.street}, ${item.address.number} - ${item.address.city}/${item.address.uf}`}
              dia={moment().isSame(item.at, 'day') ? 'Hoje' : item.at.format('D/MM')}
              horario={item.at.format('LT')}
            />
          )}
          ListEmptyComponent={<View><Text>Você não possui compromissos</Text></View>}
        />
      </View>
    );
  }

}

export default CompromissosList;

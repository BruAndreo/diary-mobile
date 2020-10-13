import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import moment from 'moment';

import Styles from './style';
import Compromissos from '../../app/Compromissos';

import CompromissoCard from '../CompromissoCard';

class CompromissosList extends Component {

  state = {
    compromissos: [],
    loading: false
  };

  constructor(props) {
    super(props);

    this.props = props;

    moment.locale('pt-br');

    this.setCompromissos = this.setCompromissos.bind(this);
  }

  async componentDidMount() {
    await this.setCompromissos(this.props.type);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.date !== this.props.date) {
      await this.setCompromissos();
    }
  }

  async setCompromissos(type = null) {
    this.setState({ loading: true });

    const compromissos = new Compromissos();

    if (!type) {
      this.setState({ compromissos: await compromissos.getCompromissosByDate(this.props.date) });
    } else {
      this.setState({ compromissos: await compromissos.getCompromissos(type) });
    }

    this.setState({ loading: false });

  }

  render() {
    return (
      <View>
        {this.state.loading ? <ActivityIndicator size='large' color={'#123456'} /> :
        <FlatList
          contentContainerStyle={Styles.lista}
          data={this.state.compromissos}
          renderItem={({item}, idx) => (
            <CompromissoCard
              key={idx}
              id={item.id}
              nomeResponsavel={item.nomeResponsavel}
              nomeEmpresa={item.nomeEmpresa}
              type={item.type}
              endereco={`${item.address.street}, ${item.address.number} - ${item.address.city}/${item.address.uf}`}
              dia={moment().isSame(item.at, 'day') ? 'Hoje' : item.at.format('D/MM')}
              horario={item.hour}
            />
          )}
          ListEmptyComponent={<View><Text>Você não possui compromissos</Text></View>}
          ListFooterComponent={() => <View style={{ height: 200 }}></View>}
        />}
      </View>
    );
  }

}

export default CompromissosList;

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { Styles } from './style';
import Compromissos from '../../app/Compromissos';
import TypesCompromissos from '../../lib/TiposDeCompromissos';

class Detalhes extends Component {
  state = {
    compromisso: {}
  };


  constructor(props) {
    super(props);

    this.props = props;
    this.idCompromisso = props.route.params.idCompromisso;
  }

  componentDidMount() {
    const compromissos = new Compromissos();

    const dados = compromissos.getCompromissoById(this.idCompromisso);

    this.setState({ compromisso: dados });
  }

  isVisit() {
    return this.state.compromisso.type === TypesCompromissos.VISIT;
  }

  getTypeString() {
    return this.isVisit() ? 'Visita' : 'Reunião';
  }

  getDay(compromisso) {
    return moment().isSame(compromisso.at, 'day') ? 'Hoje' : compromisso.at.format('D/MM')
  }

  getEndereco(address) {
    return `${address.street}, ${address.number} - ${address.cep} \n ${address.city}/${address.uf}`;
  }

  handleClickMainButton(isVisit) {
    const screenName = isVisit ? 'Formulario' : 'Home';
    const navigation = useNavigation();

    navigation.navigate(screenName);
  }

  render() {
    const compromisso = this.state.compromisso;
    const address = compromisso.address;

    return (
      <View>
        <View style={this.isVisit() ? Styles.visit : Styles.meeting}>
          <Text style={Styles.textMiniHeader}>{this.getTypeString()}</Text>
        </View>

        <View style={Styles.container}>
          <View style={Styles.cardDados}>
            <Text style={Styles.titleCard}>DADOS DA {this.getTypeString().toUpperCase()}</Text>

            <View style={Styles.iconName}>
              <Icon name='location-city' size={22} color={'#123456'} />
              <Text style={Styles.label}>Empresa:</Text>
              <Text style={Styles.value}>{compromisso.nomeEmpresa}</Text>
            </View>

            <View style={Styles.iconName}>
              <Icon name='person' size={22} color={'#123456'} />
              <Text style={Styles.label}>Responsável:</Text>
              <Text style={Styles.value}>{compromisso.nomeResponsavel}</Text>
            </View>

            <View style={Styles.iconName}>
              <Icon name='event' size={22} color={'#123456'} />
              <Text style={Styles.label}>Data:</Text>
              <Text style={Styles.value}>{this.getDay(compromisso)}</Text>
            </View>

            <View style={Styles.iconName}>
              <Icon name='schedule' size={22} color={'#123456'} />
              <Text style={Styles.label}>Horário:</Text>
              <Text style={Styles.value}>{compromisso.hour}</Text>
            </View>

            <View style={Styles.iconName}>
              <Icon name='location-on' size={22} color={'#123456'} />
              <Text style={Styles.label}>Endereço:</Text>
              <Text style={Styles.valueAddress}>{this.getEndereco(new Object(address))}</Text>
            </View>

          </View>

          <View>
            <TouchableOpacity style={Styles.button} onPress={() => this.handleClickMainButton(this.isVisit())}>
              <Text style={Styles.textButton}>{this.isVisit() ? 'Preencher formulário' : 'Concluída'}</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }

}

export default Detalhes;

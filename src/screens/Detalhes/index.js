import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import openMap from 'react-native-open-maps';
import { Styles } from './style';
import Compromissos from '../../app/Compromissos';
import TypesCompromissos from '../../lib/TiposDeCompromissos';
import DateSelector from '../../components/DatePicker';

class Detalhes extends Component {
  state = {
    compromisso: {},
    openModal: false
  };

  constructor(props) {
    super(props);

    this.props = props;
    this.idCompromisso = props.route.params.idCompromisso;

    this.remarcar = this.remarcar.bind(this);
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

  handleIniciarRota() {
    openMap({
      latitude: -23.5661755,
      longitude: -46.6517119,
      travelType: 'drive',
      provider: 'google'
    });
  }

  handleClickMainButton(isVisit) {
    const screenName = isVisit ? 'Formulario' : 'Home';

    if (!isVisit) {
      const compromisso = new Compromissos();
      compromisso.finishMeeting(this.idCompromisso);
    }

    this.props.navigation.navigate(screenName, { idCompromisso: this.idCompromisso });
  }

  handleRemarcar() {
    this.setState({ openModal: true });
  }

  remarcar(date) {
    const data = date.split(' ').map(i => i.trim());

    const compromisso = this.state.compromisso;

    compromisso.at = moment(date, "DD-MM-YYYY HH:mm");
    compromisso.hour = data[1];

    this.setState({ compromisso, openModal: false });
  }

  handleCancelar() {
    const compromisso = new Compromissos();

    compromisso.cancelCompromisso(this.idCompromisso);

    this.props.navigation.navigate('Home');
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
            <TouchableOpacity style={Styles.buttonRota} onPress={() => this.handleIniciarRota()}>
              <Text style={Styles.textButton}>{'Iniciar Rota'}</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={Styles.button} onPress={() => this.handleClickMainButton(this.isVisit())}>
              <Text style={Styles.textButton}>{this.isVisit() ? 'Preencher formulário' : 'Concluída'}</Text>
            </TouchableOpacity>
          </View>

          <View style={Styles.twoButtons}>
            <View>
              <TouchableOpacity style={Styles.buttonRemarcar} onPress={() => this.handleRemarcar()}>
                <Text style={Styles.textButton}>{'Remarcar'}</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={Styles.buttonCancel} onPress={() => this.handleCancelar()}>
                <Text style={Styles.textButton}>{'Cancelar'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {this.state.openModal && (
            <DateSelector at={compromisso.at} remarcar={this.remarcar} />
          )}

        </View>
      </View>
    );
  }

}

export default Detalhes;

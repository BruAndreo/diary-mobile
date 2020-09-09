import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import moment from 'moment';
import Styles from './style';
import Compromissos from '../../app/Compromissos';
import tiposNegocios from '../../services/TiposNegocioMock';
import tiposGarantias from '../../services/TiposGarantiaMock';

class Formulario extends Component {
  state = {
    data: null,
    hora: null,
    enderecoVisita: null,
    nomeContato: null,
    email: null,
    telefone: null,
    nomeEmpresa: null,
    cpfCnpj: null,
    enderecoCliente: null,
    propositoNegocio: null,
    valorSolicitado: null,
    qtdParcelas: null,
    tiposGarantia: null,
    recomendado: true,
    parecerComercial: null,
    proximosPassos: null
  };

  constructor(props) {
    super(props);

    this.props = props;
    this.idCompromisso = props.route.params.idCompromisso;
  }

  componentDidMount() {
    const compromissos = new Compromissos();
    const dados = compromissos.getCompromissoById(this.idCompromisso);

    this.setState({
      data: dados.at,
      hora: dados.hour,
      enderecoVisita: this.getEnderecoFormatado(dados.address),
      nomeEmpresa: dados.nomeEmpresa,
      nomeContato: dados.nomeResponsavel
    });
  }

  getEnderecoFormatado(address) {
    return `${address.street}, ${address.number}, ${address.city}-${address.uf} - ${address.cep}`;
  }

  handleNomeContato = text => {
    this.setState({ nomeContato: text });
  }

  handleEmail = text => {
    this.setState({ email: text });
  }

  handleTelefone = text => {
    this.setState({ Telefone: text });
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.visitaBox}>
          <Text style={Styles.visitaText}>Data da Visita: {moment(this.state.data).format('DD/MM/YYYY')} às {this.state.hora}</Text>
          <Text style={Styles.visitaText}>Endereço da Visita: {this.state.enderecoVisita}</Text>
        </View>

        <View style={Styles.pessoaisBox}>
          <Text style={Styles.titleBox}>Dados Pessoais</Text>

          <View>
            <Text style={Styles.label}>Nome do Contato</Text>
            <TextInput
              value={this.state.nomeContato}
              onChangeText={this.handleNomeContato}
              underlineColorAndroid={'#123456'}
              placeholder='Nome do Contato'
              spellCheck={false}
              maxLength={100}
              autoCompleteType={'off'}
              autoCapitalize={'words'}
              multiline={false}
              style={Styles.textInputs} />
          </View>

          <View>
            <Text style={Styles.label}>Email</Text>
            <TextInput
              value={this.state.email}
              onChangeText={this.handleEmail}
              underlineColorAndroid={'#123456'}
              placeholder='E-mail'
              spellCheck={false}
              maxLength={100}
              autoCompleteType={'email'}
              autoCapitalize={'none'}
              multiline={false}
              style={Styles.textInputs} />
          </View>

          <View>
            <Text style={Styles.label}>Telefone</Text>
            <TextInput
              value={this.state.telefone}
              onChangeText={this.handleTelefone}
              underlineColorAndroid={'#123456'}
              placeholder='Telefone'
              spellCheck={false}
              maxLength={11}
              autoCompleteType={'off'}
              autoCapitalize={'none'}
              keyboardType={'number-pad'}
              multiline={false}
              style={Styles.textInputs} />
          </View>

        </View>
      </View>
    );
  }
}

export default Formulario;

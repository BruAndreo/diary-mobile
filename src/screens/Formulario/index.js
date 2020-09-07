import React, { Component } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import Styles from './style';
import Compromissos from '../../app/Compromissos';
import tiposNegocios from '../../services/TiposNegocioMock';
import tiposGarantias from '../../services/TiposGarantiaMock';
import { add } from 'react-native-reanimated';

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
    return `${address.street}, ${address.number} ${address.city}-${address.uf} - ${address.cep}`;
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.visitaBox}>
          <Text>Data da Visita: {moment(this.state.data).format('DD/MM/YYYY')} às {this.state.hora}</Text>
          <Text>Endereço da Visita: {this.state.enderecoVisita}</Text>
        </View>
      </View>
    );
  }
}

export default Formulario;

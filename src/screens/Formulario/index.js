import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from './style';
import Compromissos from '../../app/Compromissos';
import tiposNegocios from '../../services/TiposNegocioMock';
import tiposGarantias from '../../services/TiposGarantiaMock';

class Formulario extends Component {
  state = {
    dadosVisita: {
      data: null,
      hora: null,
      enderecoVisita: null
    },
    dadosPessoais: {
      nomeContato: null,
      email: null,
      telefone: null,
    },
    dadosEmpresariais: {
      nomeEmpresa: null,
      cpfCnpj: null,
      enderecoCliente: null
    },
    dadosProposta: {
      propositoNegocio: null,
      valorSolicitado: null,
      qtdParcelas: null,
      tiposGarantia: null
    },
    dadosConclusao: {
      recomendado: true,
      parecerComercial: null,
      proximosPassos: null
    }
  };

  constructor(props) {
    super(props);

    this.props = props;
    this.idCompromisso = props.route.params.idCompromisso;
  }

  componentDidMount() {
    const compromissos = new Compromissos();

    const dados = compromissos.getCompromissoById(this.idCompromisso);

    const dadosVisita = {
      enderecoVisita: dados.address,
      data: dados.at,
      hora: dados.hour
    };

    const dadosPessoais = {
      nomeContato: dados.nomeResponsavel,
      email: null,
      telefone: null
    };

    const dadosEmpresariais = {
      nomeEmpresa: dados.nomeEmpresa,
      cpfCnpj: null,
      enderecoCliente: null
    };

    this.setState({ dadosVisita, dadosPessoais, dadosEmpresariais });
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text>Formulario {this.idCompromisso}</Text>
      </View>
    );
  }
}

export default Formulario;

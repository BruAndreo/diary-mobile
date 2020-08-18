import React, { Component } from 'react';
import { View, Text } from 'react-native';
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

  render() {
    return (
      <View>
        <View style={this.isVisit() ? Styles.visit : Styles.meeting}>
          <Text style={Styles.textMiniHeader}>{this.isVisit() ? 'Visita': 'Reunião'}</Text>
        </View>
      </View>
    );
  }

}

export default Detalhes;

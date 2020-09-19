import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Styles } from './Style';
import LogoPath from '../../assets/diary-logo-escuro.png';

class Sobre extends Component {

  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.card}>
          <Image
            source={LogoPath}
            style={Styles.logo}
          />

          <Text style={Styles.textin}>Desenvolvido por <Text style={Styles.textBold}>Engenhando</Text></Text>

          <Text style={Styles.textinSobre}>Versão <Text style={Styles.textBold}>1.0.0</Text></Text>
        </View>
      </View>
    );
  }
}

export default Sobre;

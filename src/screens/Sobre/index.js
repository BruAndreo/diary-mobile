import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
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

        <View style={Styles.card}>
          <Text style={Styles.title}>Você precisa de ajuda?</Text>

          <View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={Styles.buttonAnexo} onPress={this.handleAnexo}>
                <Text style={Styles.textButtonAnexo}>FAQ</Text>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={Styles.buttonAnexo} onPress={this.handleAnexo}>
                <Text style={Styles.textButtonAnexo}>Suporte</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

export default Sobre;

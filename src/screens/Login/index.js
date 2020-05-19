import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import { Styles } from './Style';
import Authentication from '../../app/Authentication';
import LogoPath from '../../assets/diary-logo-claro.png';

class Login extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  state = {
    login: '',
    password: '',
    error: false,
    errorMsg: ''
  };

  handleUserInput = text => {
    this.setState({ login: text });
  };

  handlePasswordInput = text => {
    this.setState({ password: text });
  };

  validateInputs = () => {
    if (this.state.login.length === 0 || this.state.password.length === 0) {
      throw new Error('Os campos devem estar preenchidos');
    }
  };

  loginClicked = () => {
    try {
      this.validateInputs();

      let logged = Authentication.authenticate(this.state.login, this.state.password);

      if (logged) {
        this.props.navigation.navigate('DrawerRoute');
      }
    }
    catch (e) {
      this.setState({
        error: true,
        errorMsg: e.message
      });
    }
  };

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#123456" />
        <View style={Styles.container}>
          <Image
            source={LogoPath}
            style={Styles.logo}
          />

          <TextInput
            placeholder="User"
            autoCapitalize="none"
            autoCompleteType="off"
            style={Styles.input}
            onChangeText={this.handleUserInput}
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            style={Styles.input}
            onChangeText={this.handlePasswordInput}
          />

          <TouchableOpacity style={Styles.button} onPress={this.loginClicked}>
            <Text style={Styles.textButton}>Entrar</Text>
          </TouchableOpacity>

          <Text style={Styles.msgErro}>{this.state.errorMsg}</Text>
        </View>
      </>
  );
  }
}

export default Login;

import React from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native';

import LogoPath from '../../assets/diary-logo-claro.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123456',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'stretch',
    width: 300,
    height: 150,
    marginBottom: 50
  },
  input: {
    width: 250,
    height: 35,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 10,
    borderRadius: 4,
    padding: 10
  },
  button: {
    width: 250,
    height: 35,
    backgroundColor: '#00cc00',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: 4
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default function Login(props) {
    return (
        <>
          <StatusBar barStyle="light-content" backgroundColor="#123456" />
          <View style={styles.container}>
            <Image
              source={LogoPath}
              style={styles.logo}
            />

            <TextInput
              placeholder="User"
              autoCapitalize="none"
              autoCompleteType="off"
              style={styles.input}
            />

            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </>
    );
}

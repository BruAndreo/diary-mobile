import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Compromissos from '../app/Compromissos';
import Colors from '../styles/Colors';

function getCompromissosDoDia() {
  const compromissos = new Compromissos();

  const itens = compromissos.getCompromissosByDate(new Date());

  return itens.length || 0;
}

function CustomDrawerContent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hello}>Olá</Text>
        <Text style={styles.name}>Administrador</Text>

        <View style={styles.compromissos}>
          <Text style={styles.textCompromissos}>Você tem {getCompromissosDoDia()} compromissos hoje</Text>
        </View>
      </View>

      <View style={styles.divider}></View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  header: {
    height: 130,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  hello: {
    fontSize: 14,
    color: Colors.cinza,
  },
  name: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: '700'
  },
  compromissos: {
    marginTop: 30,
  },
  textCompromissos: {
    color: Colors.secondColor
  },
  divider: {
    height: 0.3,
    backgroundColor: Colors.cinza
  }
});

export default CustomDrawerContent;

import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export const Styles = StyleSheet.create({
  visit: {
    backgroundColor: Colors.verdeVisita,
    height: 25,
  },
  meeting: {
    backgroundColor: Colors.amareloReuniao,
    height: 25,
  },
  textMiniHeader: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardDados: {
    width: 380,
    height: 300,
    backgroundColor: Colors.white,
    marginTop: 20,
    padding: 20,
    borderRadius: 8
  },
  titleCard: {
    color: Colors.primaryDark,
    fontSize: 18
  },
  iconName: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
    marginTop: 10,
  },
  label: {
    color: Colors.primaryColor,
    fontSize: 16,
    marginLeft: 5
  },
  value: {
    color: Colors.primaryDark,
    fontSize: 20,
    marginLeft: 15
  },
  valueAddress: {
    color: Colors.primaryDark,
    fontSize: 16,
    marginLeft: 15
  }
});

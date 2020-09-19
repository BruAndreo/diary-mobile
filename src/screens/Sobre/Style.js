import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20
  },
  card: {
    width: '100%',
    marginBottom: 40,
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center'
  },
  logo: {
    resizeMode: 'stretch',
    width: 300,
    height: 150,
    marginBottom: 50
  },
  textin: {
    fontSize: 16,
    color: Colors.primaryColor
  },
  textinSobre: {
    marginTop: 10,
    fontSize: 14,
    color: Colors.cinzaEscuro
  },
  textBold: {
    fontWeight: 'bold'
  },
  title: {
    fontSize: 18,
    color: Colors.primaryDark,
    fontWeight: "bold",
    marginBottom: 10
  },
  buttonAnexo: {
    width: 100,
    height: 40,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: 4,
    marginRight: 20
  },
  textButtonAnexo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
});

import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20
  },
  visitaBox: {
    height: 90,
    width: '100%',
  },
  visitaText: {
    color: Colors.primaryColor,
    fontSize: 16,
    marginBottom: 15,
  },

  label: {
    color: Colors.primaryColor,
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 5,
    marginTop: 30
  },
  textInputs: {
    fontSize: 18,
    color: Colors.primaryDark
  },

  pessoaisBox: {
    width: '100%',
    marginBottom: 40,
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
  },
  titleBox: {
    marginTop: 10,
    color: Colors.primaryColor,
    fontWeight: 'bold',
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.verdeEscuro,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 40,
    borderRadius: 4
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
});

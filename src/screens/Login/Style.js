import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
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
  },
  msgErro: {
    marginTop: 10,
    color: '#ff0000',
    fontSize: 16
  }
});

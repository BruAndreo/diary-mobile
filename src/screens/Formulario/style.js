import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
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
});

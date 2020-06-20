import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  cardVisit: {
    backgroundColor: Colors.white,
    width: 370,
    height: 150,
    marginBottom: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.verdeVisita
  },
  cardMeeting: {
    backgroundColor: Colors.white,
    width: 370,
    height: 150,
    marginBottom: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.amareloReuniao
  },
  headerVisit: {
    width: 370,
    height: 25,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.verdeVisita,
  },
  headerMeeting: {
    width: 370,
    height: 25,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.amareloReuniao
  },
  textHeader: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  bodyCard: {
    margin: 10,
    width: 350
  },
  iconName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35
  },
  nomeEempresa: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  responsavel: {
    color: Colors.primaryColor,
    fontSize: 16,
    marginLeft: 5
  }
});

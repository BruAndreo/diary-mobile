import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Colors from '../../styles/Colors';

export default CalendarItem = ({ day, weekDay, selected, handleTouch }) => {
  return (
    <TouchableOpacity style={selected ? Styles.today : Styles.item} onPress={() => handleTouch(day)}>
      <Text style={Styles.day}>{day}</Text>
      <Text style={Styles.weekDay}>{weekDay}</Text>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.cinza,
    height: 60,
    width: 60,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  today: {
    backgroundColor: Colors.azulClaro,
    height: 60,
    width: 60,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.primaryDark,
  },
  day: {
    fontSize: 20,
    color: Colors.primaryDark
  },
  weekDay: {
    color: Colors.cinzaEscuro,
    fontWeight: 'bold'
  }
});

import React from 'react';
import { View, StyleSheet } from 'react-native';

import CalendarItem from './CalendarItem';

export default WeekCalendar = (props) => {
  return (
    <View style={Styles.calendar}>
      {props.days.map((i, idx) => <CalendarItem key={idx} day={i.day} weekDay={i.weekDay} selected={i.isToday} handleTouch={props.handleTouch} />)}
    </View>
  );
}

const Styles = StyleSheet.create({
  calendar: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

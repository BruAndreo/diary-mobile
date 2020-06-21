import React, { Component } from 'react';
import { View } from 'react-native';
import moment from 'moment';

import WeekCalendar from '../../components/WeekCalendar';
import WeekCalendarRules from '../../app/WeekCalendarRules';

import CompromissosList from '../../components/CompromissosList';

class Reunioes extends Component {

  constructor(props) {
    super(props);

    this.props = props;
  }

  state = {
    weekDays: [],
    selectedDay: moment(),
  };

  handleTouch = day => {
    this.setState({
      selectedDay: moment().date(day),
      weekDays: this.state.weekDays.map(weekDay => weekDay.day === day ? {...weekDay, isToday: true} : {...weekDay, isToday: false} )
    });
  }

  componentDidMount = () => {
    const weekCalendar = new WeekCalendarRules();

    this.setState({
      weekDays: weekCalendar.getDaysOfWeek()
    });
  }

  render() {
    return (
      <View>
        <CompromissosList date={this.state.selectedDay} />
      </View>
    );
  }
}

export default Reunioes;

import React, { Component } from 'react';
import { View } from 'react-native';

import WeekCalendar from '../../components/WeekCalendar';
import WeekCalendarRules from '../../app/WeekCalendarRules';

class Home extends Component {

  constructor(props) {
    super(props);

    this.props = props;
  }

  state = {
    weekDays: []
  };

  componentDidMount = () => {
    const weekCalendar = new WeekCalendarRules();

    this.setState({
      weekDays: weekCalendar.getDaysOfWeek()
    });
  }

  render() {
    return (
      <View>
        <WeekCalendar days={this.state.weekDays} />
      </View>
    );
  }
}

export default Home;

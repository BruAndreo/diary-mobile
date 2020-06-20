import moment from 'moment';

export default class WeekCalendarRules {

  getDaysOfWeek() {
    return [
      {
        day: moment().day(1).date(),
        weekDay: 'Seg',
        isToday: moment().day(1).isSame(moment(), 'day')
      },
      {
        day: moment().day(2).date(),
        weekDay: 'Ter',
        isToday: moment().day(2).isSame(moment(), 'day')
      },
      {
        day: moment().day(3).date(),
        weekDay: 'Qua',
        isToday: moment().day(3).isSame(moment(), 'day')
      },
      {
        day: moment().day(4).date(),
        weekDay: 'Qui',
        isToday: moment().day(4).isSame(moment(), 'day')
      },
      {
        day: moment().day(5).date(),
        weekDay: 'Sex',
        isToday: moment().day(5).isSame(moment(), 'day')
      },
    ];
  }

}

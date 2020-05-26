export default class WeekCalendarRules {

  getDaysOfWeek() {
    return [
      {
        day: 25,
        weekDay: 'Seg',
        isToday: true
      },
      {
        day: 26,
        weekDay: 'Ter',
        isToday: false
      },
      {
        day: 27,
        weekDay: 'Qua',
        isToday: false
      },
      {
        day: 28,
        weekDay: 'Qui',
        isToday: false
      },
      {
        day: 29,
        weekDay: 'Sex',
        isToday: false
      },
    ];
  }

}

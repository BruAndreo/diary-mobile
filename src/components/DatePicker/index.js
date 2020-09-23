import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

class DateSelector extends Component {
  state = {
    at: null
  };

  constructor(props) {
    super(props);

    this.props = props;
    this.datePicker = null;
  }

  componentDidMount() {
    console.info(this.props.at);
    this.setState({ at: moment(this.props.at) });

    if (this.datePicker) {
      this.datePicker.onPressDate();
    }
  }

  render() {
    return (
      <DatePicker
        style={{width: 0}}
        date={this.state.at}
        mode="datetime"
        placeholder="Selecione a data"
        format="DD-MM-YYYY HH:mm"
        minDate={moment()}
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => this.props.remarcar(date)}
        ref={datePicker => this.datePicker = datePicker}
    />
    );
  }
}

export default DateSelector;

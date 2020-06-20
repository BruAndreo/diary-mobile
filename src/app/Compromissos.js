import moment from 'moment';
import CompromissosDoDiaMock from '../services/CompromissosDoDiaMock';

class Compromissos {

  getCompromissos(type = null) {
    if (!type) {
      return CompromissosDoDiaMock;
    }

    return CompromissosDoDiaMock.filter(compromisso => compromisso.type === type);
  }

  getCompromissosByDate(date) {
    const dt = moment(date);

    return CompromissosDoDiaMock.filter(compromisso => dt.isSame(compromisso.at, 'day'));
  }

}

export default Compromissos;

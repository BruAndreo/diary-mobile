import moment from 'moment';
import CompromissosDoDiaMock from '../services/CompromissosDoDiaMock';
import StatusCompromissos from '../lib/StatusCompromissos';

class Compromissos {

  getCompromissos(type = null) {
    let compromissos = CompromissosDoDiaMock;

    if (type) {
      compromissos = this.getCompromissosByType(type);
    }

    return compromissos.filter(compromisso => compromisso.status === StatusCompromissos.PENDING);
  }

  getCompromissosByDate(date) {
    const dt = moment(date);

    return CompromissosDoDiaMock.filter(compromisso => dt.isSame(compromisso.at, 'day'));
  }

  getCompromissoById(id) {
    return CompromissosDoDiaMock.find(compromisso => compromisso.id === id);
  }

  getCompromissosByType(type) {
    if (!type) return [];

    return CompromissosDoDiaMock.filter(compromisso => compromisso.type === type);
  }

  getCompromissosByStatus(status) {
    if (!status) return [];

    return CompromissosDoDiaMock.filter(compromisso => compromisso.status === status);
  }

  finishVisit(idCompromisso, form) {
    const compromisso = this.getCompromissoById(idCompromisso);

    compromisso.form = form;
    compromisso.status = StatusCompromissos.WAIT;

    return;
  }

  finishMeeting(idCompromisso) {
    const compromisso = this.getCompromissoById(idCompromisso);

    compromisso.status = StatusCompromissos.SENDED;

    return;
  }

}

export default Compromissos;

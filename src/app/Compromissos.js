import moment from 'moment';
import CompromissosDoDiaMock from '../services/CompromissosDoDiaMock';
import StatusCompromissos from '../lib/StatusCompromissos';
import Axios from 'axios';
import Token from '../lib/Token';

class Compromissos {

  async getCompromissos(type = null) {
    let compromissos = [];

    try {
      const response = await Axios.get(`https://apidiary.herokuapp.com/v1/compromissos-semana?token=${Token.getToken()}`);

      compromissos = response.data.compromissos;

      console.log(Object.keys(compromissos[0]));
    } catch (error) {
      console.error(error);
      compromissos = CompromissosDoDiaMock;
    }
    finally {
      if (compromissos.length <= 0) {
        compromissos = CompromissosDoDiaMock;
      }
    }


    if (type) {
      compromissos = compromissos.filter(compromisso => compromisso.type === type);
    }

    //return compromissos.filter(compromisso => compromisso.status === StatusCompromissos.PENDING);
    return compromissos;
  }

  async getCompromissosByDate(date) {
    await this.getCompromissos();

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

  cancelCompromisso(idCompromisso) {
    const compromisso = this.getCompromissoById(idCompromisso);

    compromisso.status = StatusCompromissos.CANCELLED;
  }

  remarcarCompromisso(idCompromisso, at, hour) {
    const compromisso = this.getCompromissoById(idCompromisso);

    compromisso.at = at;
    compromisso.hour = hour;
  }

}

export default Compromissos;

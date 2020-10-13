import moment from 'moment';
import CompromissosDoDiaMock from '../services/CompromissosDoDiaMock';
import StatusCompromissos from '../lib/StatusCompromissos';
import Axios from 'axios';
import Token from '../lib/Token';
import TypesCompromissos from '../lib/TiposDeCompromissos';

class Compromissos {

  formatCompromissos(compromisso) {
    return {
      id: compromisso.id,
      type: compromisso.tipo.descricao === 'Visita' ? TypesCompromissos.VISIT : TypesCompromissos.MEETING,
      at: moment(compromisso.dataAgendamento),
      hour: moment(compromisso.dataAgendamento).format('HH:mm'),
      nomeEmpresa: compromisso.nomeEmpresa || 'N/A',
      nomeResponsavel: compromisso.nomeContato || compromisso.endereco.pessoa.Nome,
      address: {
        cep: compromisso.endereco.nro_CEP,
        street: compromisso.endereco.logradouro,
        number: compromisso.endereco.nro_Logradouro,
        city: compromisso.endereco.municipio.descricao,
        uf: "SP",
      },
      status: this.defineStatus(compromisso.status.descricao)
    };
  }

  defineStatus(status) {
    switch(status) {
      case 'Agendado':
        return StatusCompromissos.PENDING;

      case 'Cancelado':
        return StatusCompromissos.CANCELLED;

      case 'Concluido':
        return StatusCompromissos.SENDED;

      default:
        return StatusCompromissos.WAIT;
    }
  }

  async getCompromissos(type = null) {
    let compromissos = [];

    try {
      const response = await Axios.get(`https://apidiary.herokuapp.com/v1/compromissos-semana?token=${Token.getToken()}`);

      compromissos = response.data.compromissos;
      compromissos = compromissos.map(compromisso => this.formatCompromissos(compromisso));

    } catch (error) {
      console.error(error);
      compromissos = CompromissosDoDiaMock;
    }

    if (type) {
      compromissos = compromissos.filter(compromisso => compromisso.type === type);
    }

    //return compromissos.filter(compromisso => compromisso.status === StatusCompromissos.PENDING);
    return compromissos.filter(compromisso => compromisso.status === StatusCompromissos.PENDING).sort((a, b) => a.at - b.at);
  }

  async getCompromissosByDate(date) {
    const compromisso = await this.getCompromissos();

    const dt = moment(date);

    //return CompromissosDoDiaMock.filter(compromisso => dt.isSame(compromisso.at, 'day'));
    return compromisso.filter(compromisso => dt.isSame(compromisso.at, 'day'));
  }

  async getCompromissoById(id) {
    const compromissos = await this.getCompromissos();

    return compromissos.find(compromisso => compromisso.id === id);
  }

  async getCompromissosByType(type) {
    if (!type) return [];

    const compromissos = await this.getCompromissos(type);

    return compromissos;

    //return CompromissosDoDiaMock.filter(compromisso => compromisso.type === type);
  }

  async getCompromissosByStatus(status) {
    if (!status) return [];

    const compromissos = await this.getCompromissos(type);

    return compromissos.filter(compromisso => compromisso.status === status);
    //return CompromissosDoDiaMock.filter(compromisso => compromisso.status === status);
  }

  async finishVisit(idCompromisso, form) {
    const compromisso = await this.getCompromissoById(idCompromisso);

    compromisso.form = form;
    compromisso.status = StatusCompromissos.SENDED;

    try {
      await Axios.post(`https://apidiary.herokuapp.com/v1/compromissos/${idCompromisso}/finalizar?token=${Token.getToken()}`);
    } catch (error) {
      console.error(error);
    }

    return;
  }

  async finishMeeting(idCompromisso) {
    const compromisso = await this.getCompromissoById(idCompromisso);

    compromisso.status = StatusCompromissos.SENDED;

    try {
      await Axios.post(`https://apidiary.herokuapp.com/v1/compromissos/${idCompromisso}/finalizar?token=${Token.getToken()}`);
    } catch (error) {
      console.error(error);
    }

    return;
  }

  async cancelCompromisso(idCompromisso) {
    const compromisso = await this.getCompromissoById(idCompromisso);

    compromisso.status = StatusCompromissos.CANCELLED;

    try {
      await Axios.delete(`https://apidiary.herokuapp.com/v1/compromissos/${idCompromisso}?token=${Token.getToken()}`);
    } catch (error) {
      console.error(error);
    }
  }

  async remarcarCompromisso(idCompromisso, at, hour) {
    const compromisso = await this.getCompromissoById(idCompromisso);

    compromisso.at = at;
    compromisso.hour = hour;

    console.info('hora que nois manda', hour);

    try {
      await Axios.put(`https://apidiary.herokuapp.com/v1/compromissos/${idCompromisso}/remarcar?token=${Token.getToken()}`,
      { data: moment(at).format('YYYY-MM-DD'), hora: hour });
    } catch (error) {
      console.error(error);
    }
  }

}

export default Compromissos;

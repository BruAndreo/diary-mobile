import CompromissosDoDiaMock from '../services/CompromissosDoDiaMock';

class Compromissos {

  getCompromissos(type = null) {
    if (!type) {
      return CompromissosDoDiaMock;
    }

    return CompromissosDoDiaMock.filter(compromisso => compromisso.type === type);
  }

}

export default Compromissos;

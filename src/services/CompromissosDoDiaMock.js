import moment from "moment";
import TypesCompromissos from '../lib/TiposDeCompromissos';

export default [{
    type: TypesCompromissos.MEETING,
    at: moment('2020-05-27 15:00:00'),
    nomeEmpresa: "Impacta",
    nomeResponsavel: "Renato",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
  {
    type: TypesCompromissos.VISIT,
    at: moment('2020-05-27 16:00:00'),
    nomeEmpresa: "Impacta",
    nomeResponsavel: "Renato",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
];

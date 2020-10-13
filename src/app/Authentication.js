import axios from 'axios';
import Token from '../lib/Token';
import Statistics from '../lib/Statistics';

class Authentication {

  static async authenticate(username, password) {
    try {
      Statistics.setUsername(username);
      const dados = await axios.post('https://apidiary.herokuapp.com/v1/authenticate', {}, { auth: { username, password } });

      Token.setToken(dados.data.token);

      return true;
    } catch (error) {
      console.info('Login error: ', error);

      throw new Error('NotAutenticaded');
    }
  }

}

export default Authentication;

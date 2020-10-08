import axios from 'axios';

class Authentication {

  static async authenticate(username, password) {
    try {
      const dados = await axios.post('https://apidiary.herokuapp.com/v1/authenticate', {}, { auth: { username, password } });

      console.info(dados.data.token);

      return true;
    } catch (error) {
      console.info('Login error: ', error);

      throw new Error('NotAutenticaded');
    }
  }

}

export default Authentication;

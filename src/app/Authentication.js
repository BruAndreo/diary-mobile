class Authentication {

  static authenticate(username, password) {
    if (username === password) {
      throw new Error('Usuário e/ou senha inválidos');
    }

    return true;
  }

}

export default Authentication;

class Token {

  static setToken(token) {
    this.token = token;
  }

  static getToken() {
    return this.token;
  }

  static removeToken() {
    this.token = null;
  }

}

export default Token;

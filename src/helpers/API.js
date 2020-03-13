class API {
  constructor() {
    this.baseUrl = "/api/";
  }

  get(endpoint) {
    return fetch(this.baseUrl + endpoint).then(response => response.json());
  }

  post(endpoint, data) {
    return this._send("post", endpoint, data);
  }

  put(endpoint, data) {
    return this._send("put", endpoint, data);
  }

  delete(endpoint, data) {
    return this._send("delete", endpoint, data);
  }

  _send(method, endpoint, data = {}) {
    return fetch(this.baseUrl + endpoint, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  }
}

export default new API();

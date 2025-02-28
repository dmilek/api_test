const axios = require("axios");
const config = require("./config");

class APIClient {
  constructor(baseURL = config.baseUrl) {
    this.client = axios.create({
      baseURL,
      timeout: 5000,
      headers: { "Content-Type": "application/json" }
    });
  }

  async get(endpoint) {
    return this.client.get(endpoint);
  }

  async post(endpoint, data) {
    return this.client.post(endpoint, data);
  }

  async put(endpoint, data) {
    return this.client.put(endpoint, data);
  }

  async delete(endpoint) {
    return this.client.delete(endpoint);
  }
}

module.exports = APIClient;

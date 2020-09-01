const fetch = require("node-fetch");
const axios = require("axios");

class Github {
  constructor() {
    this.client_id = "f91ea950b42ac995e871";
    this.client_secret = "688aca8829c9d3b0b70893945446c20d0c57be57";
    this.repos_count = 15;
    this.repos_sort = "created: asc";
  }
  async getUser() {
    try {
      const profileResponse = await fetch(
        `https://api.github.com/users/${10000000000000}?client_id=${
          this.client_id
        }&client_secret=${this.client_secret}`
      );
      const response = await profileResponse.json();
      return await response;
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = { Github };

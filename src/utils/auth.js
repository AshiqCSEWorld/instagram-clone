import decode from "jwt-decode";
import axios from "axios";

const auth = {
  // Initializing important variables
  domain: "http://localhost:8080/api", // API server domain

  login(userName, password) {
    // Get a token from api server using the fetch api
    return this.fetch("/users/login", {
      method: "post",
      userName,
      password
    }).then(res => {
      this.setToken(res.data.token);
      return res;
    });
  },

  fetch(url, { method, ...options }) {
    return axios[method](
      this.domain + url,
      { ...options },
      { headers: this.headers() }
    );
  },

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // GEtting token from localstorage
    return !!token && !this.isTokenExpired(token) && this.verifyToken();
  },

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired. N
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  },

  verifyToken() {
    try {
      return decode(this.getToken());
    } catch (error) {
      if (error.name === "InvalidTokenError") {
        return false;
      }
    }
  },

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
  },

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  },

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
  },

  headers() {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    // Setting Authorization header
    if (this.loggedIn()) headers["Authorization"] = "Bearer " + this.getToken();

    return headers;
  }
};

export default auth;

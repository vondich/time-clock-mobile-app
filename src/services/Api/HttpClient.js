import axios from 'axios';
import { API_BASE_URL } from './ApiConstants';
import _get from 'lodash/get';

const get = (endpoint, params) => {
  return new Promise((resolve, reject) => {
    const options = {
      params
    }
    console.log("HttpClient::get", API_BASE_URL + endpoint)

    axios.get(API_BASE_URL + endpoint, options)
      .then((response) => {
        console.log(response)
        if (response.status >= 200 && response.status <= 399) {
          resolve(response)
        } else {
          reject({ errorMessage: "Something went wrong. Please try again." })
        }
      })
      .catch((error) => {
        console.log("HttpClient::get::error", error);
        reject({ errorMessage: "Something went wrong. Please try again." })
      })
  });
}

const post = (endpoint, payload) => {
  return new Promise((resolve, reject) => {
    console.log("HttpClient::post", API_BASE_URL + endpoint)
    axios.post(API_BASE_URL + endpoint, payload)
      .then((response) => {
        console.log(response)
        if (response.status >= 200 && response.status <= 399) {
          resolve(response)
        } else {
          reject({ errorMessage: "Something went wrong. Please try again." })
        }
      })
      .catch((error) => {
        console.log(error);
        reject({ errorMessage: "Something went wrong. Please try again." })
      });
  });
}

export { get, post }
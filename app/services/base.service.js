/* eslint-disable import/prefer-default-export */
import axios from 'axios';

/**
 * Base service class to be inherited from all services.
 * Services should be pointed to an specific endpoint.
 */
export class BaseService {
  constructor(prefix) {
    this.serviceUrl = `/api/${prefix}`;
    this.headers = {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'pragma': 'no-cache'
    };
    this._requestConfig = {
      headers: this.headers
    };
  }

  /**
   * Performs a HTTP GET to the specified endpoint.
   * @param {string} endpoint Endpoint where the resource should be fetched.
   * @param {object} queryParams Any query parameter to send with the request.
   * @returns The response from the server.
   */
  get(endpoint = '', queryParams = null) {
    this._appendToken();
    let reqConfig = Object.assign({}, this._requestConfig);
    reqConfig.params = queryParams;
    return axios.get(`${this.serviceUrl}/${endpoint}`, reqConfig)
      .then(res => res.data)
      .catch(err => {
        throw err.response.data;
      });
  }

  /**
   * Performs a HTTP POST to the specified endpoint.
   * @param {string} endpoint Endpoint where the resource should be posted.
   * @param {object} data Data to include in the body of the request.
   * @returns The response from the server.
   */
  post(endpoint = '', data = null) {
    this._appendToken();
    let reqConfig = Object.assign({}, this._requestConfig);
    return axios.post(`${this.serviceUrl}/${endpoint}`, data, reqConfig)
      .then(res => res.data)
      .catch(err => {
        throw err.response.data;
      });
  }

  /**
   * Performs a HTTP PUT to the specified endpoint.
   * @param {string} endpoint Endpoint where the resource should be put.
   * @param {object} data Data to include in the body of the request.
   * @returns The response from the server.
   */
  put(endpoint = '', data = null) {
    this._appendToken();
    let reqConfig = Object.assign({}, this._requestConfig);
    return axios.put(`${this.serviceUrl}/${endpoint}`, data, reqConfig)
      .then(res => res.data)
      .catch(err => {
        throw err.response.data;
      });
  }

  /**
   * Performs a HTTP PATCH to the specified endpoint.
   * @param {string} endpoint Endpoint where the resource should be put.
   * @param {object} data Data to include in the body of the request.
   * @returns The response from the server.
   */
  patch(endpoint = '', data = null) {
    this._appendToken();
    let reqConfig = Object.assign({}, this._requestConfig);
    return axios.patch(`${this.serviceUrl}/${endpoint}`, data, reqConfig)
      .then(res => res.data)
      .catch(err => {
        throw err.response.data;
      });
  }

  /**
   * Performs a HTTP PATCH to the specified endpoint.
   * @param {string} endpoint Endpoint where the resource should be put.
   * @param {object} data Data to include in the body of the request.
   * @returns The response from the server.
   */
  upload(endpoint = '', data = {}) {
    this._appendToken();
    return this.patch(endpoint, data);
  }

  /**
   * Performs a HTTP DELETE to the specified endpoint.
   * @param {string} endpoint Endpoint where the resource should be deleted.
   * @param {string} id Identifier of the resource to delete.
   * @returns The response from the server.
   */
  delete(endpoint = '', id) {
    this._appendToken();
    let reqConfig = Object.assign({}, this._requestConfig);
    return axios.delete(`${this.serviceUrl}/${endpoint}`, reqConfig)
      .then(res => res.data)
      .catch(err => {
        throw err.response.data;
      });
  }

  /**
   * Appends the bearer token to each request made.
   */
  _appendToken() {
    let authToken = localStorage.getItem('token');
    if (authToken) {
      this.headers['Authorization'] = authToken;
    }
  }
}

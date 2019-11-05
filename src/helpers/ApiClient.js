import axios from 'axios';

// TODO Move me elsewhere!
const host = window.location.protocol + "//" + window._env_.NLPAAS_URL;

export default class clientAPI {
  constructor() {
    this.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  }

  get(url, params) {
    const fullUrl = new URL(host + url);

    // Optional query parameters.
    if (params) {
      Object.keys(params).forEach(key => fullUrl.searchParams.append(key, params[key]));
    }

    return axios({
      method: 'get',
      url: fullUrl,
      headers: this.headers,
      withCredentials: true,
    });
  }

  post(url, params) {
    return axios({
      method: 'post',
      url: host + url,
      headers: this.headers,
      withCredentials: true,
      data: params.data
    });
  }

  delete(url, params) {
    return axios({
      method: 'delete',
      url: host + url,
      headers: this.headers,
      withCredentials: true,
      data: params.data
    });
  }
}

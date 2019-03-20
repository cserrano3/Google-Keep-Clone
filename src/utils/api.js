import axios from 'axios';

export default class API {
    constructor(url, options) {
        this.url = url,
        this.options = options
    }

    performPOST(url, data, customOptions) {
        return axios.post(url, data, customOptions);
    }

    performPUT(url, data, customOptions) {
        return axios.put(url, data, customOptions);
    }

    performGET(url, customOptions) {
        return axios.get(url, customOptions);
    }

    performDELETE(url, data, customOptions) {
        return axios.delete(url, customOptions);
    }
}

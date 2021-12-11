const axios = require("axios")

class BaseApi {
    constructor() {
        this.axios = axios
        this.axios.defaults.baseURL = "http://api.weatherbit.io/v2.0"
        this.axios.defaults.headers = {Accept: "application/json"}

    }

    async get(url, param) {
        param.key = "52584ccd03684a0ab3ee931197aa8123"
        const data = {
            method: 'GET',
            url: url,
            params: param

        }
        try {
            return this.axios(data)
        } catch (e) {

        }
    }




}

module.exports = BaseApi
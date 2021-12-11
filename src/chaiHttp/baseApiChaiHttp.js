const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp)

class BaseApiChaiHttp {
    constructor() {
        this.chai = chai
        this.baseURL = "http://api.weatherbit.io/v2.0"
    }

     get (url,param){
        param.key = "52584ccd03684a0ab3ee931197aa8123"
        return  chai.request(this.baseURL)
            .get(url)
            .query(param)
    }

    getWithOutKey (url,param){
        return  chai.request(this.baseURL)
            .get(url)
            .query(param)
    }

}

module.exports = BaseApiChaiHttp
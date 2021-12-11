const BaseApiChaiHttp   =require("./baseApiChaiHttp")
const currentWeatherChaiHttp= require("./currentWeatherChaiHttp")
const chai = require("chai")
const shema = require("../../shemas/shema");
chai.use(require('chai-json-schema'));


class ApiChai extends BaseApiChaiHttp{
    should= chai.should();
    currentWeather= new currentWeatherChaiHttp ()
    shema=shema
}
module.exports = new ApiChai()
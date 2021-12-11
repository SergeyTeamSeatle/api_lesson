const BaseApi   =require("./baseApi")
const currentWeather= require("./currentWeather")
const chai = require("chai")
const shema = require("../shemas/shema");
chai.use(require('chai-json-schema'));


class Api extends BaseApi{
    expect= chai.expect;
    currentWeather= new currentWeather ()
    shema=shema
}
module.exports = new Api()
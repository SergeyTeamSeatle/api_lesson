const api = require("../src/api")

describe("test", function (){
    it('Wether now ', async function () {
        let res= await api.currentWeather.getWeather()
        api.expect(res.status).to.be.eql(200)
        api.expect(res.data).to.be.jsonSchema(api.shema.weatherNow);

    });
    it('Wether on 2020 ', async function () {
        let res = await api.currentWeather.getWeatherHistory()
        api.expect(res.status).to.be.eql(200)
        api.expect(res.data).to.be.jsonSchema(api.shema.weatherHistory);
        api.expect( res.data.timezone).to.be.eql("Europe/Minsk")
        api.expect(res.data.country_code).to.be.eql("BY")
    });


})
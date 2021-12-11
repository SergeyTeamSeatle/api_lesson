const api = require("../src/chaiHttp/apiChai")


describe("test", function () {
    it('Wether now ', async function () {
        let res = await api.currentWeather.getWeather()
        res.should.to.have.status(200)
        res.body.should.to.be.jsonSchema(api.shema.weatherNow);
        res.body.should.to.be.property("data")
        res.body.data[0].timezone.should.to.be.eql("Europe/Minsk")

    });

    it('Wether on 2020 ', async function () {
        let res = await api.currentWeather.getWeatherHistory()
        res.should.to.have.status(200)
        res.body.should.to.be.jsonSchema(api.shema.weatherHistory);
        res.body.timezone.should.to.be.eql("Europe/Minsk")
        res.body.country_code.should.to.be.eql("BY")
    });


    it('Wether Wrong Key', async function () {
        let res = await api.currentWeather.getWeatherWrongKey()
        res.should.to.have.status(403)
        res.body.should.to.be.property("error");
        res.body.error.should.to.be.eql("API key not valid, or not yet activated.")
    });

    it('Wether With Out Key', async function () {
        let res = await api.currentWeather.getWeatherWithOutKey()
        res.should.to.have.status(403)
        res.body.should.to.be.property("error");
        res.body.error.should.to.be.eql("API key is required.")
    });

})
const BaseApiChaiHttp = require("./baseApiChaiHttp")

class CurrentWeatherChaiHttp extends BaseApiChaiHttp {
    constructor() {
        super();
    }

    async getWeather() {
        return await this.get("/current", {
            lat: 53.88,
            lon: 27.58
        })
    }


    async getWeatherHistory() {
        return await this.get("/history/hourly", {
            lat: 53.88,
            lon: 27.58,
            start_date: "2020-10-10",
            end_date: "2020-10-11",
            lang: "ru",
            tz: "local"
        })
    }

    async getWeatherWithOutKey() {
        return await this.getWithOutKey("/current", {
            lat: 53.88,
            lon: 27.58
        })
    }


    async getWeatherWrongKey() {
        return await this.getWithOutKey("/current", {
            lat: 53.88,
            lon: 27.58,
            key:"52584ccd03684a0ab3ee931197aa8333"
        })
    }


}


module.exports = CurrentWeatherChaiHttp
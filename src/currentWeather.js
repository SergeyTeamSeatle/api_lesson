const BaseApi = require("./baseApi")

class CurrentWeather extends BaseApi{
constructor() {
    super();
}

async getWeather (){
    return this.get("/current",{ lat:38,
        lon:-78.25})
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



}



module.exports=  CurrentWeather
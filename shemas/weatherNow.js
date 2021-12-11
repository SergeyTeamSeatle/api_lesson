const required = [
    "app_temp",
"aqi",
"city_name",
"clouds",
"country_code",
"datetime",
"dewpt",
"dhi",
"dni",
"elev_angle",
"ghi",
"h_angle",
"lat",
"lon",
"ob_time",
"pod",
"precip",
"pres",
"rh",
"slp",
"snow",
"solar_rad",
"state_code",
"station",
"sunrise",
"sunset",
"temp",
"timezone",
"ts",
"uv",
"vis",
"weather",
"wind_cdir",
"wind_cdir_full",
"wind_dir",
"wind_spd"
]

const item = {
    title: 'data in array',
    type: 'object',
        required: required,
    properties: {
        rh: {
            type: 'number'
        },
        pod: {
            type: 'string'
        },
        lon: {
            type: 'number'
        },
        pres: {
            type: 'number'
        },
        timezone: {
            type: 'string'
        },

        "ob_time": {
            type: 'string'
        },
        "country_code": {
            type: 'string'
        },
        "clouds": {
            type: 'number'
        },
        "ts": {
            type: 'number'
        },
        "solar_rad": {
            type: 'number'
        },
        "state_code": {
            type: 'string'
        },
        "city_name": {
            type: 'string'
        },
        "wind_spd": {
            type: 'number'
        },
        "wind_cdir_full": {
            type: 'string'
        },
        "wind_cdir": {
            type: 'string'
        },
        "slp": {
            type: 'number'
        },
        "vis": {
            type: 'number'
        },
        "h_angle": {
            type: 'number'
        },
        "sunset": {
            type: 'string'
        },
        "dni": {
            type: 'number'
        },
        "dewpt": {
            type: 'number'
        },
        "snow": {
            type: 'number'
        },
        "uv": {
            type: 'number'
        },
        "precip": {
            type: 'number'
        },
        "wind_dir": {
            type: 'number'
        },
        "sunrise": {
            type: 'string'
        },
        "ghi": {
            type: 'number'
        },
        "dhi": {
            type: 'number'
        },
        "aqi": {
            type: 'number'
        },
        "lat": {
            type: 'number'
        },
        "weather": {
            type: "object"
        },
        "datetime": {
            type: 'string'
        },
        "temp": {
            type: 'number'
        },
        "station": {
            type: 'string'
        },
        "elev_angle": {
            type: 'number'
        },
        "app_temp": {
            type: 'number'
        }
    }
};


const arrayData = {
    title: ' array  weather ',
    type: 'array',
    items: item
}
var weatherNow = {
    title: 'schema v1 ',
    type: 'object',
    required: ["count", 'data'],
    properties: {
        data: arrayData,
        count: {
            type: 'number',
            maximum: 5
        }
    }
};
module.exports = weatherNow
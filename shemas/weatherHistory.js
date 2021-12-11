const required = [
    "rh",
    "wind_spd",
    "timestamp_utc",
    "pod",
    "slp",
    "app_temp",
    "elev_angle",
    "solar_rad",
    "pres",
    "h_angle",
    "dewpt",
    "snow",
    "uv",
    "azimuth",
    "wind_dir",
    "weather",
"ghi",
    "dhi",
    "timestamp_local",
    "vis",
    "dni",
    "datetime",
    "temp",
    "precip",
    "clouds",
    "ts",
]

const item = {
    title: 'data in array',
    type: 'object',
    required: required,
    properties: {
        "rh": {
            type: 'number'
        },
        "wind_spd": {
            type: 'number'
        },
        "timestamp_utc": {
            type: 'string'
        },
        "pod": {
            type: 'string'
        },
        "slp": {
            type: 'number'
        },
        "app_temp": {
            type: 'number'
        },
        "elev_angle": {
            type: 'number'
        },
        "solar_rad": {
            type: 'number'
        },
        "pres": {
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
        "azimuth": {
            type: 'number'
        },
        "wind_dir": {
            type: 'number'
        },
        "weather": {
            type: 'object'
        },
        "ghi": {
            type: 'number'
        },
        "dhi": {
            type: 'number'
        },
        "timestamp_local": {
            type: 'string'
        },
        "vis": {
            type: 'number'
        },
        "dni": {
            type: 'number'
        },
        "datetime": {
            type: 'string'
        },
        "temp": {
            type: 'number'
        },
        "precip": {
            type: 'number'
        },
        "clouds": {
            type: 'number'
        },
        "ts": {
            type: 'number'
        },
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
    required: ["timezone", 'data', "city_name", "city_id","country_code"],
    properties: {
        data: arrayData,

        timezone: {
            type: 'string'
        },
        city_name: {
            type: 'string'
        },
        city_id: {
            type: 'string'
        },
        country_code: {
            type: 'string'
        },
    }
};
module.exports = weatherNow



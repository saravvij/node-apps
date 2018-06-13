const request = require('request');

const getWeather = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/be84cd743e028c1eaf183bc8a45ef82c/${latitude},${longitude}`;
    request({ url: url, json:true }, (error, response, body) => {
        if(error || response.statusCode === 403){
            callback('Unable to fetch weather information');
            return;
        }
        if(body.code === 400) {
            callback(body.error);
            return;
        } 

        callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        } );
    });
}

module.exports = {
    getWeather
}
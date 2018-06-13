const request = require('request');

const getWeather = (latitude, longitude) => {
    return new Promise( (resolve, reject) => {
        const url = `https://api.darksky.net/forecast/be84cd743e028c1eaf183bc8a45ef82c/${latitude},${longitude}`;
        request({ url: url, json:true }, (error, response, body) => {
            if(error || response.statusCode === 403){
                reject('Unable to fetch weather information');
            }
            if(body.code === 400) {
                reject(body.error);
            } 
            reject({
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        });
    });
}

module.exports = {
    getWeather
}
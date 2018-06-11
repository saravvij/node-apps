const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
    .option('address', {
        alias: 'a',
        describe: 'Weather to fetch adress',
        demandOption: true
    })
    .help()
    .alias('a')
    .argv;

const command = argv._[0];
const address = argv.address;

geocode.getAddress(address, (error, results) => {
    if(error) {
        console.log(error);
    }else {
        console.log(results);
        weather.getWeather(results.latitude, results.longitude, (error, weatherResults) => {
            if(error) {
                console.log(error);
            }else {
                console.log(`It's currently ${weatherResults.temperature}F. It feels like ${weatherResults.apparentTemperature}F`);
            }
        });
    }
});

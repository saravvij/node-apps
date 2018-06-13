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

geocode.getAddress(address)
.then( location => {
    console.log(location);
    return weather.getWeather(location.latitude, location.longitude);
}).then( weatherResults =>{
    console.log(`It's currently ${weatherResults.temperature}F. It feels like ${weatherResults.apparentTemperature}F`);
}).catch(e => console.log(e));


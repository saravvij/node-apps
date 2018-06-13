const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .option('address', {
        alias: 'a',
        describe: 'Weather to fetch adress',
        demandOption: true
    })
    .help()
    .alias('a')
    .argv;

const encodedAddr = encodeURIComponent(argv.address);
let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}`;

axios.get(url)
.then( resp => {
    //console.log(resp);
    if(!resp || !resp.data || resp.data.results.length === 0 ) {
        throw new Error("Unable to connect to Google API server.");
    }
    const formatedAddr = resp.data.results[0].formatted_address;
    const location = resp.data.results[0].geometry.location;
    const latitude = location.lat;
    const longitude = location.lng;
    console.log(`Address : ${formatedAddr} \nLocation: ${latitude}, ${longitude}`);
    return axios.get(`https://api.darksky.net/forecast/be84cd743e028c1eaf183bc8a45ef82c/${latitude},${longitude}`);
}).then(resp => {
    const currently = resp.data.currently;
    console.log(`** It's currently ${currently.temperature}F. It feels like ${currently.apparentTemperature}F **`);
}).catch(e => console.log(e));

const request = require('request');
const yargs = require('yargs');

const argv = yargs
             .command('get', 'To get the address coordinates', {
                address: {
                    desc: 'Address of the location',
                    command: true,
                    alias: 'a'
                } 
             })
             .help()
             .argv;

const command = argv._[0];

if(command === 'get') {
    const address = argv.address;
    if(address){
        const encodedAddr = encodeURIComponent(argv.address);
        let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}`;
        request(url, (error, response, body) => {
            if(response.statusCode != 200) {
                console.log("Error: Unable to get the address :  " + response.statusCode)
                return;
            }
            console.log(body);
       })
    }else{
        console.log("Error: address is required");
    }
    
}

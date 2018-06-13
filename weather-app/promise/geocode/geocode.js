const request = require('request');

const getAddress = (address) => {
    return new Promise((resolve, reject) => {
        if (!address) {
            reject("Error: Address is required.");
        }

        const encodedAddr = encodeURIComponent(address);
        let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}`;
        request( { url: url, json: true }, (error, response, body) => {
            if (error) {
                reject('Error : Unable to connect to googleapi server. Please retry.');
            }
            
            if (body.status === 'ZERO_RESULTS' || !body.results || body.results.length === 0) {
                reject('Unable to find the address provided. Please enter the valid address.');
            }
    
            resolve({
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        });
    });
}

module.exports = {
    getAddress
}
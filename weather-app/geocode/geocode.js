const request = require('request');

const getAddress = (address, callback) => {

    if (!address) {
        callback("Error: Address is required.");
        return;
    }

    const encodedAddr = encodeURIComponent(address);
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddr}`;
    request( { url: url, json: true }, (error, response, body) => {
        if (error) {
            callback('Error : Unable to connect to googleapi server. Please retry.');
            return;
        }
        
        if (body.status === 'ZERO_RESULTS' || body.results.length === 0) {
            callback('Unable to find the address provided. Please enter the valid address.')
            return;
        }

        callback(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        })

    });
}

module.exports = {
    getAddress
}
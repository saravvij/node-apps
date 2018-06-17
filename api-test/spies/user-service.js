var db = require('./db.js');

const handleSignup = (email, password) => db.saveUser ( {email, password} );

module.exports = { handleSignup }
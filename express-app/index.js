const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.use((req, resp, next) => {
    console.log(`${new Date().toLocaleDateString()} : Received new request at ${req.path}`)
    next();
});

app.use((req, resp, next) => {
    console.log("Processing new request...");
    next();
});

app.get('/help', (req, resp) => {
    resp.sendFile(path.join(__dirname, 'public/index.html'));
})

app.get('/', (req, resp) => {
    resp.send({
        message: 'Welcome',
        name: 'Jon!'
    })
});

app.get('/help', (req, resp) => {
    resp.send('<h1> Server is up and running </h1>');
})

app.listen(3000, () => {
    console.log("Server started at port 3000");
})
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

app.get('/users', (req, resp) => {
    resp.status(200).send(
        [
            {
                id: 123,
                name: 'Jon'
            },
            {
                id: 345,
                name: 'David'
            }
        ]
    );
})

app.listen(3000, () => console.log('Server is listening at port 3000'));

module.exports = {
    app
}
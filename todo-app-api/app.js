const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/Todo');
const {User} = require('./models/User');

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(`Received new request path: ${req.path} body: ${req.body}`);
    next();
})

app.post('/todos', (req, res) => {
    const TodoDoc = new Todo(req.body);
    TodoDoc.save()
    .then( doc => res.status(201).send(doc))
    .catch( e =>  {
        console.log("Unable create new Todo", e)
        res.status(400).send(`Error: Unable to create Todo. Details: ${e.message}`);
    });
});


app.listen(3000, () => console.log('Todo API service started and listening at port 3000'));
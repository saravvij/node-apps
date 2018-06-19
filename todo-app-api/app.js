const mangoose = require('mongoose');

mangoose.Promise = global.Promise;

mangoose.connect('mongodb://localhost:27017/todo');

/* const Todo = mangoose.model('Todo', {
    text: {
        type: String,
        minlength: 1,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: null
    },
    completedAt: {
        type: Number,
        default: null
    }
});

const groceryTodo = new Todo ( { text: 'Get grocery', completed: false, completedAt:123});
groceryTodo.save()
.then( (res)=> console.log(JSON.stringify(res, undefined, 2)) )
.catch(err => console.log(err)); */

const User = mangoose.model('user', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

const user1 = new User( {email: 'jon@gmail.com'});

user1.save()
.then( user => console.log(user))
.catch( e => console.log("Unable to save user. ", e));


const expect = require('expect');
const request = require('supertest');
const { Todo } = require('./models/Todo');
const { app } = require('./app');

describe('Todo APIs', () => {
    const text = 'Test create todo item';

    beforeEach((done) => {
        Todo.remove({text})
        .then( () => done());
    });

    it('should create Todo', (done) => {

        request(app)
        .post('/todos')
        .send({ text })
        .expect(201)
        .expect((res) => {
           expect(res.body.text).toBe(text);
        })
        .end( (err, res) => {
            if(err) {
                return done(err);
            }
            
            Todo.findById(res.body._id) 
            .then(todo => {
                expect(todo.text).toBe(text);
                done();
            })
            .catch(err => done(err));
        }) 
    });

    it('should not create Todo', (done) => {

        request(app)
        .post('/todos')
        .send({ text: '' })
        .expect(400)
        .end( (err, res) => {
            if(err) {
                return done(err);
            }
            Todo.find( {text: ''})
            .then( todo => {
                expect(todo).toBeNull;
                done();
            }).catch(e => done(e));
        });
    });

});
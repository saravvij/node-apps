const request = require('supertest');
const expect = require('expect');
const app = require('./app.js').app;

describe('APIs', () => {

    describe('GET /', () => {
        it('should provide Hello World response', (done) => {
            request(app)
            .get('/')
            .expect(200)
            .expect('Hello World')
            .end(done)
        });
        
    })
    

    describe('GET /users', () => {
        it('should respond users', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect(((res) => {
                expect(res.body).toInclude({
                    id: 123,
                    name: 'Jon'
                })
            }))
            .end(done);
        });
    })
    
});

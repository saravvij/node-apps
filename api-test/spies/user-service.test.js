const expect = require('expect');
const rewire = require('rewire');

const userService = rewire('./user-service.js');

describe('User Service', () => {
    var db = {
        saveUser: expect.createSpy()
    };

    userService.__set__('db', db);

    it('should signup user', () => {
        const email = 'sv@test.com';
        const password = 'pass123';
        expect(userService.handleSignup(email, password)).toBeUndefined;
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});;
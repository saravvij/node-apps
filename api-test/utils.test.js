
const expect = require('expect');
const utils = require('./utils.js');


it("should add two numbers", () => {
    const res = utils.add(4,5);
    expect(res).toBe(9).toBeA('number');
});

it('should square a number', () => {
    const res = utils.square(5);
    expect(res).toBe(25).toBeA('number');
});


it("should contain odd number", () => {
    const res = utils.items();
    expect(res).toInclude(5);
});


it('should be equal to user', () => {
    expect(utils.getUser()).toEqual({
        id: 10,
        age: 30,
        name: 'Jon'
    })
});

it('should perform async add two numbers', (done) => {
    utils.asyncAdd(3, 4, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });

    
});
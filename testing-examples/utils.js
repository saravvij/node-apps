const add = (x,y) => x + y;
const square = (x) => x*x;
const items = () => [1,3,5,7,10];
const getUser = () => {
    return {
        id: 10,
        age: 30,
        name: 'Jon'
    };
} 

const asyncAdd = (x, y, callback) => {
    setTimeout( ()=> {
        callback(x+y);
    }, 1000);
};

module.exports = {
    add,
    square,
    items,
    getUser, 
    asyncAdd
}
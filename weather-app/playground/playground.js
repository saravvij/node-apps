const asyncAdd = (x,y) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if( typeof x === 'number' && typeof y === 'number'){
                resolve(x+ y);
            }else{
                reject("Error: Not a number");
            }
        }, 2000);
    });
}


asyncAdd(4, 5)
.then( sum => {
    return asyncAdd(sum, 10)
})
.then( sum => console.log(sum))
.catch(e => console.log(e));
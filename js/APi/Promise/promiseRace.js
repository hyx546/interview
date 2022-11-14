const race = function (arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject(new TypeError('it is not array'));
        }

        for (let index = 0; index < arr.length; index++) {
            const promise = arr[index];
            Promise.resolve(promise).then((data) => resolve(data), (error) => reject(error));
        }
    });
};


let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "promise1");
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "promise2");
});
let promise3 = new Promise((res, rej) => {
    setTimeout(rej, 600, "fail");
});
Promise.race([promise1, promise2, promise3]).then(val => {
    console.log(val);
}).catch((err) => console.log('err', err));

race([promise1, promise2, promise3]).then(val => {
    console.log(val);
}).catch((err) => console.log('err', err));
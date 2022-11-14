const a1 = Promise.resolve('1');
const a2 = Promise.resolve('2');
const a3 = Promise.resolve('3');
const a4 = Promise.resolve('4');
// const a6 = Promise.reject('errora');
// const a5 = Promise.reject('errorb');




const myAll = (arr) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject(new TypeError('no arr'));
        }

        const result = [];
        let count = 0;

        for (let index = 0; index < arr.length; index++) {
            const promise = arr[index];
            Promise.resolve(promise).then((data) => {
                count++;
                result[index] = data;
                if (count === arr.length) {
                    resolve(result);
                }
            }, errpr => reject(errpr));
        }
    });
};


myAll([a1, a2, a3, a4]).then((data) => console.log(data), (error) => console.log('err', error));
// 使用promise.all 进行5个请求，若其中一个失败了，怎么让其他4个成功返回

const a1 = Promise.resolve('1');
const a2 = Promise.resolve('2');
const a3 = Promise.resolve('3');
const a4 = Promise.resolve('4');
// const a6 = Promise.reject('errora');
const a5 = Promise.reject('errorb');


// Promise.all([a1, a2, a3, a4, a5, a6].map((promise) => promise.catch((e) => console.log(e))))
//     .then((data) => console.log(data))
//     .catch((error) => console.log('error', error));

/**
 *  promise all 实现
 */
Object.prototype.myAll = (list) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(list)) {
            reject(new TypeError('类型错误'));
        }

        const len = list.length;
        let count = 0;

        const arr = new Array(len);

        list.forEach((promise, index) => {
            Promise.resolve(promise).then((data) => {
                count++;
                arr[index] = data;
                if (count === len) {
                    resolve(arr);
                }
            }, errpr => reject(errpr));
        });
    });
};

myAll([a1, a2, a3, a4, a5]).then((data) => console.log(data), (error) => console.log('err', error));
Promise.all([a1, a2, a3, a4]).then((data) => console.log('all', data));
/**
 *  简易版
 * @param {*} fn 
 * @returns 
 */
function curry(fn) {
    return function (a) {
        return function (b) {
            return fn(a, b);
        };
    };
}

function sum(a, b) {
    return a + b;
}

const currySum = curry(sum);

console.log(currySum(1)(2));


/**
 * 通用版柯里化
 */

function curryFn(fn) {
    const len = fn.length;
    return function curried(...args) {
        if (args.length >= len) {
            return fn.apply(this, args);
        }
        return function (...args2) {
            return curried.apply(this, args.concat(args2));
        };
    };
}

function sum1(a, b, c) {
    return Array.prototype.slice.call(arguments).reduce((a, b) => a + b, 0);

}

const curryFnSum = curryFn(sum1);

console.log(curryFnSum(1)(2)(3));
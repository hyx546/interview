/**
 * 1.创建一个空对象obj
 * 2.将obj的__proto__指向构造函数的prototype
 * 3.用call/apply去绑定构造函数的this指向，并执行
 * 4.若函数执行没有返回对象，则返回obj，否则返回result
 * @param {*} func 
 */
const myNew = function (func, ...args) {
    const obj = {};
    obj.__proto__ = func.prototype;
    const result = func.apply(obj, args);
    return result instanceof Object ? result : obj;
};
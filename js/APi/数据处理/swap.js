/**
 * 交换两个值，不能用中间变量
 * @param {*} a 
 * @param {*} b 
 */
let a = 1;
let b = 2;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);
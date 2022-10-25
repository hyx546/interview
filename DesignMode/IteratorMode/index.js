/** 遍历的本质，实质是采用了Symbol.iterator */
const arr = [1, 2, 3];

const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


/**
 * ES6 Generator
 */


/** 
 * ES6 自带生成器(Generator)
 * 用ES5写一个能够生成迭代对象的迭代器生成函数
 * 定义生成器函数，入参是任意集合 
 * */


console.log(typeof A); // Function
console.log(typeof B); // undefined

function A() {
    return "A";
}

console.log(typeof null); // object
console.log(typeof A()); // string

const obj = {};
var B = function () {
    return obj;
};

console.log(new B() === obj); // true
console.log(B() === obj); // true

// 后面问到typeof的作用及判断，为什么 typeof null === object
/**
 * typeof 主要用来判断基本数据类型，对于null和负责数据类型一律object
 * typeof 的原理就是根据变量的机器码来判断变量类型的
 * js 在底层存储变量时，变量的机器码的低位1-3来被用来存储变量的数据类型信息，而null的机器码均为0，因此被当作对象来看待
 */
// 怎么判断一个元素是否是数组
// Array.isArray() / instanceof / Array.prorotype.slice.call();
// 1.创建一个空对象
// 2.空对象的__proto__属性指向构造函数的原型
// 3.空对象赋值给构造函数的内部的this，
// 用构造函数的内置方式去修改空对象
// 4.如果返回的是非基本数据类型，则返回，否则返回obj
// function _new(fn, ...arg) {
//   let obj = Object.create(fn.prototype);
//   const result = Object.apply(obj, arg);
//   return Object.prototype.toString.call(result) === [object, Object] ? result : obj;
// }


// 1.创建一个空对象
// 2.将obj的__proto__ 指向构造函数的prototype
// 3.用call或者apply去绑定this并执行函数体
// 4.若函数没有返回对象就返回obj，否则就返回函数体返回的内容

function myNew(fn,...args){
  let obj = {};
  obj.__proto__ = fn.prototype;
  const result = fn.apply(obj,args);
  return result instanceof Object  ? result : obj;
}


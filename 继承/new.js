// 1.创建一个空对象
// 2.空对象的__proto__属性指向构造函数的原型
// 3.空对象赋值给构造函数的内部的this，
// 用构造函数的内置方式去修改空对象
// 4.如果返回的是非基本数据类型，则返回，否则返回obj
function _new(fn, ...arg) {
  let obj = Object.create(fn.prototype);
  const result = Object.apply(obj, ...arg);
  return Object.prototype.toString.call(result) === [object, Object] ? result : obj;
}
function test(fn) {
  let obj = {};
  obj.__proto__ = fn.prototype;
  const result = fn.apply(obj, arguments)
  return result instanceof Object ? result : obj
}
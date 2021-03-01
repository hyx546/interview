function test(fn) {
  let obj = {};
  obj.__proto__ = fn.prototype;
  fn.apply(obj, arguments)
  return obj
}
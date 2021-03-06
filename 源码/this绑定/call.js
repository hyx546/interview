

Function.prototype.myCall = function(context,...args){
  // 保存存入的对象，如果为空，则指向window
  var context = context || window;

  // 将函数this指向绑定在新对象上
  context.fn = this;
  // 将参数列表传入到函数里
  const result = context.fn(...args);

  delete context.fn;  // 删除fn属性

  return result
}


const obj = {
  a: 1,
  b: 2,
}
function test(c, d) {
  return this.a + this.b + c + d
}
console.log(test.myCall(obj,3,4));
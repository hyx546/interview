Function.prototype.myApply = function(context,arr){
  var context = context || window;
  context.fn = this;
  const result = context.fn(...arr);

  delete context.fn;

  return result;
}



const obj = {
  a: 1,
  b: 2,
}
function test(c,d) {
  return this.a + this.b + c + d
}
console.log(test.myApply(obj,[3,4]));
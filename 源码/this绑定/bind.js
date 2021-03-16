Function.prototype.myBind = function (context, ...agrs) {
  const self = this;
  return function (..._args) {
    return self.apply(context, agrs.concat(_args))
  }
}

const obj = {
  a: 1,
  b: 2,
}
function test(c, d) {
  const f = Number([].slice.call(arguments,2))
  return this.a + this.b + c + d + f
}
console.log(test.myBind(obj, 3, 4)());
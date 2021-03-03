// var a =20;
// var obj = {
//   a:10,
//   c:this.a+20,
//   fn:function() {
//     return this.a;
//   }
// }

// console.log(obj);
// console.log(obj.c);
// console.log(obj.fn());

function foo() {
  console.log(this.a)
}

function active(fn) {
  fn(); // 真实调用者，为独立调用
}

var a = 20;
var obj = {
  a: 10,
  getA: foo
}

active(obj.getA); // undefined
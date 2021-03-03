function foo() {
  return function inner(a, b) {
    const c = a + b;
    return c
  }
}

const f = foo();
console.log(f(1,2)); //3


var a = 10;
(function () {
	console.log(a) //undefined
	a = 5
	console.log(a) //5
	var a = 20
	console.log(a)//20
})()
// console.log(Array.of(1,2,3,4)); // [1,2,3,4];

// console.log(Array.prototype.slice.call([1,2,3,4]));

// function Foo() {
//   this[100] = 'test-100';
//   this[1] = 'test-1';
//   this['B'] = 'bar-b';
//   this['a'] = 'bar-a';
// }

// const bar = new Foo();

// console.log(bar);
// for (let key in bar) {
//   console.log(`index:${key} value:${bar[key]}`);
  
// }


var n = 1;
function foo(){
  n = 100;
  console.log(n);
};
console.log(n);
foo()
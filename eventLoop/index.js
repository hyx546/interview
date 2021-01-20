// 先把setTimeout 的方法移到队列中，
// 当栈里面的代码执行完了之后，把队列里的方法取出来放到栈中执行
console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);

setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);

// 1-4-2-3
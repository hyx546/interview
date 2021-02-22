// 栈溢出
// 在同一个任务中重复调用嵌套的foo函数
function foo() {
  foo()
}
foo()

// 正常执行
//使用setTimeout让foo函数在不同的任务中执行
function foo() {
  setTimeout(foo,0);
}
foo()

//在同一个任务中执行foo，但是不是嵌套执行
// 在同一个任务里不断的创建微任务，执行，创建，执行，虽然不会爆栈，但是也无法执行下一个任务
// 主线程被卡死了，所有页面会卡死
function foo() {
  return Promise.resolve().then(foo)
}
foo()
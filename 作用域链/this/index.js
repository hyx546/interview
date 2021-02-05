var a = 20;

function fn(){
  function foo(){
    return this.a;
  }
  foo()
}

// 此时this是指向fn的执行上下文
console.log(fn()); // undefined
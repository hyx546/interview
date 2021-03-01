function fn() {
  this.count++;
}

const obj = {
  count:10
}

// fn.call(obj); // 11
// fn.apply(obj); // 11
const bindFn = fn.bind(obj); // bind不会立即执行,返回一个函数
bindFn()
console.log(obj.count);
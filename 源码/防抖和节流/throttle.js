function throttle(fn, delay) {
  let flag = true; // 闭包的一个标记
  return function() {
    if(!flag) return false;
    flag = false;
    setTimeout(() => {
      fn.call(this);
      flag = true;
    },delay)
  }
}
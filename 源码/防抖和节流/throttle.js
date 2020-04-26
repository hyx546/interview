function throttle(fn,delay) {
  let flag = true;
  return function () {
    if(!flag) return false;
    flag = false;
    setTimeout(() => {
      fn();
      flag = true
    },delay)
  }
}
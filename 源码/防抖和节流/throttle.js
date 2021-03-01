function throttle(fn, delay) {
  let flag = true;
  return function () {
    let self = this;
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(self, arguments);
      flag = true
    }, delay)
  }
}
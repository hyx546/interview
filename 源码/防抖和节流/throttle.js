// 当触发事件时，没有设置定时器就设置一个
// 当定时器中被执行后，把定时器设置为null

function throttle(fn, delay) {
  let timeout;
  return function () {
    let self = this;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        fn.apply(self, arguments);
      }, delay)
    }
  }
}
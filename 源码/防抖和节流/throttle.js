/**
 * 使用定时器的话不会立即执行，停止触发后还会执行一次
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 */
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

/**
 * 使用时间戳会立即执行，停止后会立即执行
 */

function throttle(fn,delay){
  // 对比时间戳，初始化为0则会立即执行，初始化为当前时间戳贼delay秒后执行
  let previous = 0;
  return function(){
    const self = this;
    let now = new Date().getTime();
    // 间隔大于wait则执行并更新对比时间戳
    if(now - previous > delay){
      fn.apply(self,arguments);
      previous = now;
    }
  }
}
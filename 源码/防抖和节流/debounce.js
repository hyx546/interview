const debounce = (fn, delay) => {
  let timer = null;
  return function(){
    let self = this;
    if(timer) clearTimeout(timer); // delay内再次触发，则清空
    timer = setTimeout(() => {
      fn.apply(self,arguments)
    },delay)
  }
};
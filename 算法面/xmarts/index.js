// 1. promise超时等待 （）
// 2. a, b 值交换，不使用中间值
// 3. 自定义一个react hooks， useLocalStorage， 并要求最后返回[value, _setValue, removeLocalStorage]
// 4. 深拷贝函数（不使用json.stringtify）或者 手写一个防抖函数

// 防抖
function debonce(fn,delay){
  let timer = null;
  const self = this;
  return function(){
    if(tiemr){
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(self,arguments)
    }, delay);
  }
}

// a,b交换
function swap(a,b){
  [a,b] = [b,a];
  return [a,b]
}

// promise超时等待
// a, b 
const a = () => {
  return new Promise((resolve,reject) => {
    resolve('输出了')
  })
}
const b = () =>{
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      reject('请求超时')
    }, 5);
  })
}
Promise.race([a,b])

// 自定义一个react hooks， useLocalStorage， 
// 并要求最后返回[value, _setValue, removeLocalStorage]

function useLocalStorage(init){

}
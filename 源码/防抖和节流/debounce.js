// 非立即执行
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


// 立即执行
// const debounce = (fn, delay) => {
//   let timer = null;
//   return function(){
//     let self = this;
//     if(timer) clearTimeout(timer); // delay内再次触发，则清空
//     timer = setTimeout(() => {
//       timer = null;
//     },delay)
//     console.log(timer);
//     if(!timer){
//       fn.apply(self,arguments)
//     }
//   }
// };

debounce(() => console.log(1),3000)
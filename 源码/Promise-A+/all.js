// Promise.all(promises:[]).then(fun:function)

// var promises = () =>  {
//   return [100,200,300].map(current => {
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         console.log(current);
//       }, current);
//     })
//   })
// }

// Promise.all(promises()).then(() => {
//   console.log('end');
// })

//  并发限制

const multiRequest = (urls=[],maxNum) => {
  // 请求的总数量
  const len  = urls.length;
  // 根据的请求数量来创建一个数组用来保存请求的结果
  const result = new Array(len).fill(false);

  // 当前完成的数量
  let count =0;

  return new Promise((resolve,reject) => {
    while (count < maxNum) {
      next();
    }
    function next() {
      let current = count++;
      // 处理边界条件
      if(current >= len){
        // 请求全部完成就讲promise置为成功状态，然后将result作为promise值返回
        !result.includes(false) && resolve(result);
        return ;
      }
      const url = urls[current];
      fetch(url).then(res => {
        // 保存请求的结果
        result[current] = res;
        if(current < len){
          next()
        }
      }).catch(err => {
        result[current] = err;
        if(current < len){
          next()
        }
      })
    }
  })

}


// promiseAll 实现
// Promise.myAll = (arr) => {
//   const result =[]; //用来保存结果
//   return new Promise((resolve,reject) => {
//     let i=0;
//     for(let item of arr){
//       Promise.resolve(item).then((res) => {
//         result.push(res);
//         i++;
//         if(i===arr.length) resolve(result)
//       },err => reject(err))
//     }
//   })
// }
const p1 = new Promise((resolve,reject) => resolve(1));
const p2 = new Promise((resolve,reject) => resolve(2));
const p3 = new Promise((resolve,reject) => resolve(3));
const p4 = new Promise((resolve,reject) => resolve(4));
const p5 = new Promise((resolve,reject) => resolve(5));

const res=[p1,p2,p3,p4,p5]

console.log(Promise.myAll(res).then(a => console.log(a)).catch(err=>console.log(err)))
/** 
 * 实现一个 sleep 函数，
 * 比如 sleep(1000) 意味着等待1000毫秒，
 * 可从 Promise、Generator、Async/Await 等角度实现
*/



// function sleep(time) {
//   return new Promise(resolve => setTimeout(resolve,time))
// }

// Promise
// sleep(1000).then(() => {
//   console.log('-----等待了');
// })

// async
// async function test() {
//   let out = await sleep(3000);
//   console.log('-----222');
//   return out
// }

// test()


// es5

function sleep(callback,time) {
    if(typeof callback === 'function'){
      setTimeout(callback,1000)
    }
}

function output1() {
    console.log('------3131');
}

sleep(output1,1000)


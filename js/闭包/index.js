// 改造下面的代码，使之输出0 - 9，写出你能想到的所有解法。
// for (var i = 0; i< 10; i++){
// 	setTimeout(() => {
// 		console.log(i);
//     }, 1000)
// }


// 1.改变声明
// for (let i = 0; i< 10; i++){
// 	setTimeout(() => {
// 		console.log(i);
//     }, 1000)
// }


// 2.立即执行函数
// for (var i = 0; i< 10; i++){
//   (i => {
//     setTimeout(() => {
//       console.log(i);
//       }, 1000)
//   })(i)
// }

// 3.利用 setTimeout 函数的第三个参数，会作为回调函数的第一个参数传入
// for (var i = 0; i< 10; i++){
// 	setTimeout((i) => {
// 		console.log(i);
//     }, 1000,i)
// }

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   },1000)
// }

// 1.let 块级作用域
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   },1000)
// }

// 2.闭包
// for (var i = 0; i < 5; i++) {
//   (function(i){
//     setTimeout(() => {
//       console.log(i);
//     },1000)
//   })(i)
// }

// 3.利用settimeout的第三个参数
// setTimeout第二个参数以后的参数可以作为第一个函数的参数
for (var i = 0; i < 5; i++) {
  setTimeout((i) => {
    console.log(i);
  },1000,i)
}


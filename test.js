// const str = 'AbC'

// const arr =str.split('');

// const a = arr.map(item => {
//   if(/[A-Z]/.test(item)){

//     item = item.toLowerCase();
//     return item
//   }
//   else if(/[a-z]/.test(item)){
//     item = item.toUpperCase();
//     return item
//   }
// })
// console.log(a.join(''));

// const arr = [1, 2, 4];


// console.log('outer');
// setTimeout(() => {
//   setTimeout(() => {
//     console.log('setTimeout');
//   }, 0);
//   setImmediate(() => {
//     console.log('setImmediate');
//   });
// }, 0);


Promise.resolve().then(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  },0)
})

setTimeout(() => {
  console.log(3);
  Promise.resolve().then(() => {
    console.log(4);
  })
},0)


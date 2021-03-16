// myPromise.prototype.then = (onFulfilled, onRejected) => {

//   const self = this;
//   onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
//   onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw (reason) }
//   if (self.status === 'fulfilled') {
//     return new Promise((resolve, reject) => {

//     })
//   }
//   if (self.status === 'rejected') {
//     return new Promise((resolve, reject) => {

//     })
//   }
//   if (self.status === 'pending') {
//     return new Promise((resolve, reject) => {

//     })
//   }
// }


function test(a, b) {
  return new Promise((resolve, reject) => {
    console.log('------1',a);
    resolve(1)
  }).then((id) => {
    console.log(id);
    console.log('-----2',b);
  })
}

console.log(test(1,2));
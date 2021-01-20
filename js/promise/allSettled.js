const promises = [
  Promise.reject('c'),
  Promise.resolve('a'),
  Promise.resolve('b')
]

Promise.allSettled(promises).then(res => {
  console.log(res);
})
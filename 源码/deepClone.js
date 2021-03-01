function deepClone(obj) {
  let newArr = obj instanceof Array ? []:{}
  for(let i in obj) {
    newArr[i] =typeof obj[i] == 'object'?
    deepClone(obj[i]) :obj[i]
  }
  return newArr
}
let a=[1,2,3,[1,4]]
let b=deepClone(a);
// let b=a
b[2]=4
console.log('====================================');
console.log(a);
console.log('====================================');
console.log(b);

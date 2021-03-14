Array.prototype.myReduce = function (fn, initValue) {
  if (!initValue && !this.length) {
    throw error('error')
  }
  let result = initValue ? initValue : this[0];
  for (let i = initValue ? 0 : 1; i < this.length; i++) {
    result = fn(result, this[i], i, this)
  }
  return result
}


let arr = [1, 2, 3, 4];
arr.__proto__ = new Array()

console.log(arr.myReduce((pre, val) => pre + val, 0));
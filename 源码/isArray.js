Array.__proto__.isMyArray = function (arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

console.log(Array.isMyArray([1,2,3]));
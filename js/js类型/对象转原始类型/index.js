
const obj = {
  value:3,
  valueOf:function() {
    return 4
  },
  toString:function () {
    return 5
  },
  [Symbol.toPrimitive]() {
    return 6
  }
}

console.log('----obj',obj+1);
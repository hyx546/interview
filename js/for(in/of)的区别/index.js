const obj = {
  name: 'hanyuxi',
  age: 22,
  gender: 'girl',
  // length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
}

const obj1 = {
  0: '1',
  1: '2',
  2: 'c',
  length: 3,
}

for (let item of Array.from(obj)) {
  console.log('------of', item); // obj is not interable
}

for (let key in obj) {
  console.log('-------key', key);
}
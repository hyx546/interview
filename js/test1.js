const arr = {
  a: 1,
  b: 2,
  c: {
    name: 'hyx',
    age: 18
  }
}

Object.defineProperty(arr, 'c', {
  name: 'hyx',
  age: 16
})

console.log(arr);

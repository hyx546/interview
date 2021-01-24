function flat(arr, num) {
  let res = [];
  if (num > 0) {
    arr.map(item => {
      if (Array.isArray(item)) {
        res = [...res, ...flat(item, num - 1)]
      }
      else {
        res.push(item)
      }
    })
  }
  else {
    res = arr
  }
  return res
}
const arr = [1, 2, 3, [4, 5], [6, 7, [8]]];
console.log(flat(arr, 2));
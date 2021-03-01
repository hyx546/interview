const flat = function (arr, num) {
  let res = []
  if (num) {
    arr.map(item => {
      if(Array.isArray(item)){
        res = res.concat(flat(item,num-1))
      }else{
        res = res.concat(item)
      }
    })

  } else {
    res.push(...arr)
  }

  return res
}
const arr = [1, 2, 3, [4, 5], [6, 7, [8]]];
console.log(flat(arr, 2));
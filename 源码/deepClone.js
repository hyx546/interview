function deepClone(obj) {
  let newArr = obj instanceof Array ? []:{}
  for(let i in obj) {
    newArr[i] =typeof obj[i] == 'object'?
    deepClone(obj[i]) :obj[i]
  }
  return newArr
}


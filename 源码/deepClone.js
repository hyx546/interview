function deepClone(obj) {
  // 非引用类型，直接返回
  if (!obj || typeof obj !== 'object') return obj
  //创建一个变量用来存储对象或者数组类型
  let newArr = obj instanceof Array ? [] : {};
  for(let i in obj){
    newArr[i] = typeof obj[i]  === 'object' ? deepClone(obj[i]) : obj[i]
  }
  return newArr 
}

console.log(deepClone([1,2,3,4,5]));


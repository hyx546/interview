Promise.resolve = function (value) {
  // 如果value是promise对象,直接返回这个对象
  if(value instanceof Promise){
    return value;
  }

  return new Promise((resolve,reject) => {
    if(value && value.then && typeof value.then === 'function'){
      return value.then(resolve,reject);
    }else{
      resolve(value)
    }
  })

}
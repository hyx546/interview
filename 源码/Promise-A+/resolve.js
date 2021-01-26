Promise.resolve = function (value) {
  // 如果value是promise对象,直接返回这个对象
  if(value instanceof Promise){
    return value;
  }

  return new Promise((resolve,reject) => {
    // 如果是thenable，返回的promise就会跟随这个thenable对象，采用它的最终状态
    if(value && value.then && typeof value.then === 'function'){
      // thenable对象采用settimeout 是根据原生promise对象执行的结果推断的
      // 为了同样的执行顺序，增加setTimeout延时
      setTimeout(() => {
        value.then(resolve,reject);
      });
    }else{
      // 如果是其他，返回就以value作为成功状态的promise
      resolve(value)
    }
  })

}
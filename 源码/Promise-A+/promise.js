function myPromise(exector) {
  let self = this;
  self.status = 'pending';
  self.onFulfilled = []; // 成功回调
  self.onRejected = []; // 失败回调

  self.resolve = function (value) {
    if(value instanceof myPromise){
      // 如果value是promise，继续递归执行
      return value.then(self.resolve,self.reject)
    }
    // 异步执行，保证执行顺序
    setTimeout(() => {
      if (self.status === 'pending') {
        self.value = value;
        self.status = 'fulfilled'
        self.onFulfilled.forEach(fn => fn());
      }
    })
  }

  self.reject = function (reason) {
    setTimeout(() => {
      if (self.status === 'pending') {
        self.status = 'rejected';
        self.reason = reason;
        self.onRejected.forEach(fn => fn())
      }
    })
  }
  // 异常处理，用try/catch捕获
  try {
    exector(self.resolve, self.reject)
  } catch (error) {
    self.reject(error)
  }

}
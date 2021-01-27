function Promise(exector) {
  let self = this;
  self.status = 'pending';
  self.onFulfilled = []; // 成功回调
  self.onRejected = []; // 失败回调

  function resolve(value) {
      if(self.status === 'pending'){
        self.value = value;
        self.status = 'fulfilled'
        self.onFulfilled.forEach(fn => fn());
      }
  }

  function reject(reason) {
    if(self.status === 'pending'){
      self.status = 'rejected';
      self.reason = reason;
      self.onRejected.forEach(fn => fn())
    }
  }

  try {
    exector(resolve,reject)
  } catch (error) {
    reject(error)
  }
  
}
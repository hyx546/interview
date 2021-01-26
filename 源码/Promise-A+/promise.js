function Promise(executor) {
  let self = this;
  self.status = 'pending';
  self.onFulfilled = []; //成功的回调
  self.onRejected = []; // 失败的回调

  function resolve(value) {
    if(self.status === 'pending'){
      self.status = 'fulfilled';
      self.value = value;
      self.onFulfilled.forEach(fn => fn());
    }
  }
  function reject(reason) {
    if(self.status === 'pengding'){
      self.status = 'rejected';
      self.reason = reason;
      self.onRejected.forEach(fn => fn())
    }
  }

  try {
    executor(resolve,reject)
  } catch (error) {
    reject(error)
  }
}
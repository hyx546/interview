function myPromise(constructor) {
  let self = this;
  self.status = "pending"; //状态
  self.value = undefined; // resolve
  self.reason = undefined ; //reject
  function resolve(value) {
    if(self.status === "pending"){
      self.value = value;
      self.status = "resolved";
    }
  }
  function reject(reason) {
    if(self.status === "pending"){
      self.reason = reason;
      self.status = "rejected";
    }
  }
  try {
    constructor(resolve,reject)
  } catch (e) {
    reject(e)
  }
}
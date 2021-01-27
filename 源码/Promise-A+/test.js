Promise.reject = (reason) => {
  return new Promise((resolve,reject) => {
    reject(reason)
  })
}
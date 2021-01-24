
Promise.prototype.finally = function (callback) {
  let p = this.constructor;
  return this.then(
    value => p.resolve(callback()).then(() => value),
    reason => p.resolve(callback()).then(() => { throw reason })
  )
}
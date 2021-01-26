Promise.prototype.then = (onFulfilled,onRejected) => {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
  onRejected = typeof onRejected === 'function' ? onRejected : reason => threw(reason)
}
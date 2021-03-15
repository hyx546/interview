Array.prototype.myMap = function (fn, context) {

  const arr = [];
  const self = this;

  const ctx = context ? context : self;

  if (typeof fn !== 'function') {
    throw new Error(`${fn} is not a function`)
  }

  for (let i = 0; i < self.length; i++) {
    arr.push(fn.call(ctx, self[i], i, self))
  }

  return arr
}

let a = new Array(1, 2, 3, 4, 5)

console.log(a.myMap((item) => item * 2));
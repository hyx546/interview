function deepClone(obj) {
  if (!obj || !(obj instanceof Object)) return obj;
  let arr = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    arr[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
  }
  return arr;
}
const a = { name: 'hyx' }

const b = deepClone(a);
a.name = 'hj'
console.log(b);
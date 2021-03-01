const a =[1,2,3,4];

const b = a.map(item => {
  if(item > 2) return;
  return item
})

const c = a.forEach(item => {
  if(item > 2) return;
  return item
})
console.log(b);
console.log(c);

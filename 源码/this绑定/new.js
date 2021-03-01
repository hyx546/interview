let count =10;
function fn (count) {
  this.count = count
}

let obj = new fn(20);

console.log(count,obj.count);
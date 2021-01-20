// 再重写原型的时候，都需要给constructor 重新赋值
function Parent() {
  
}

Parent.prototype = {
  name:'hanyuxi'
}

Parent.prototype.constructor = Parent

const parent = new Parent();

console.log('-----',parent.constructor);
console.log('----',parent.constructor === Parent);
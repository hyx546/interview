// instanceof基于原型链
function myInstanceof (left ,right) {
  if(typeof left !== 'object' || left === null) return false;
  //  Object.getPrototypeOf 可以拿到参数的原型对象
  let proto = Object.getPrototypeOf(left)
  while (true) {
    if (proto === null) return false;
    if(proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto)
  }
}
console.log('====================================');
console.log(myInstanceof('111',String));
console.log('====================================');
console.log(myInstanceof(new String('111'),String));

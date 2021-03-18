/**
 * 1.create:用参数对象作为新生成的对象的__proto__
 * 2.第一个参数proto，表示新建对象的原型对象
 * 3.propertiesObject：表示添加到新创建对象的可枚举值
 *  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
 * */ 


Object.myCreate= function(proto,propertiesObject){
  if(typeof proto != 'function' && typeof proto !='object'){
    throw new TypeError()
  }
  function F() {};
  F.prototype = proto;
  return new F();
}

let a = Object.myCreate({name:'hyx'},{mm: {value: 10}})
console.log(a.mm);

console.log(Object.create(null));
/**
 * 封装一个create方法
 * 根据父类对象的原型，创建一个实例
 * 该实例将会作为子类对象的原型
 * 在es5中直接提供了一个Object.create方法
 */

 function create(proto,options){
  //  创建一个空对象
  let obj = {};

  // 让新的空对象成为父类对象的实例
  obj.__proto__ = proto;

  // 传入的方法都挂载在新的对象上，新的对象作为子类对象的原型
  Object.defineProperties(obj,options);

  return obj;
 }


//  实现

Child.prototype = create(Parent.prototype,{
  // 不要忘了重新指定构造函数
  constructor:{
    value:Child
  },
  getAge:{
    value:function() {
      return this.age
    }
  }
})

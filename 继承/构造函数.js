//  构造函数继承子类只能复制父类构造函数的属性和方法，无法访问父类原型上的属性和方法
//  子类可以拥有独立的属性和方法
function Parent() {
  this.name = "hanyuxi";
  this.play=['run','play']
}

Parent.prototype.getName = function() {
  return this.name
}

function Child() {
  Parent.call(this) // call借用parent的构造函数
  this.type ='child'
}

const parent = new Parent();
const child = new Child()
const child1 = new Child();

console.log('------parent',parent);
console.log('------child',child);

console.log('-------parent-getname',parent.getName());
// console.log('-----child-getname',child.getName()); 报错

child.name = 'hanjing'
console.log('--------name',child.name);
console.log('--------name1',child1.name);



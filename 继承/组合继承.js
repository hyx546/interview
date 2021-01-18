// 子类可以独立的拥有父类的属性和方法
// 子类可以继承父类原型上的属性和方法
// 缺点：父构造函数被调用的次数太多了，影响性能
function Parent() {
  this.name = 'hanyuxi';
  this.play = ['run','hhhh']
}

function Child() {
  Parent.call(this);
  this.type = 'child';
}

Parent.prototype.getName = function() {
  return this.name
}

Child.prototype = new Parent();

Child.prototype.constructor = Child;

const parent = new Parent();
const child = new Child();
const child1 = new Child()

child1.play.push('wewqeqw');

console.log('----parent',parent);
console.log('----child',child);
console.log('----child1',child1);

console.log('------parent.getname',parent.getName());
console.log('------child.getname',child.getName());
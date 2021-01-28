//  实例访问同一个原型，共享同一份数据，
// 改变原型中的复杂数据类型，所有实例都会发生改变
// 使用 in 检查对象中是否含有某个属性时，如果对象中没有但是原型链中有，也会返回 true
//  hasOwnProperty
function Person() {
  this.name = 'hanyuxi',
  this.play =[1,2,3],
  this.obj = {name:'hhh'}
}
function Child() {
  this.type = 'children'
}
Child.prototype = new Person();

var child1 = new Child();
var child2 = new Child();

child1.name = 'hanjing'
child2.play.push(4)
// child1.obj.name ='66666'
child1.obj ={}

console.log('----child1.play',child1.play);
console.log('-----child2.play',child2.play);

console.log('----child1.name',child1.name);
console.log('-----child2.name',child2.name);

console.log('----child1.name',child1.obj);
console.log('-----child2.name',child2.obj);

console.log('---in','name' in child1);


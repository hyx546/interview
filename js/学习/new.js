let person = new Person();

function newFn() {
  let obj ={};
  obj.__proto__ = Person.prototype();
  Person.call(obj);
  return obj
}
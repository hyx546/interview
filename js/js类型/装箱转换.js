var symbolObject = (function() { return this;}).call(Symbol("a"));
var stringObject = (function() { return this;}).call(new String("abc"));

console.log(symbolObject);
console.log(typeof symbolObject);
console.log(symbolObject instanceof Symbol);

console.log('----------');
console.log(stringObject);
console.log(typeof stringObject);


console.log('---------');
console.log(new String("abc"));

function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person = new Person("Rose", 18);
console.log(Person.prototype.toString.call(person));
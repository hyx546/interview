// function Animal(name) {
//     this.name = name;
//     this.age = 18;
// }

// Animal.prototype.address = {location:"野外"}

// let a1 = new Animal('猴子');
// let a2 = new Animal('小鸡')

// // console.log(a1.age === a2.age); // true
// // console.log(a1.address === a2.address); // true
// // console.log(a1.__proto__ === a2.__proto__ ); // true
// // console.log(a1.constructor === Animal); // true

// // console.log(Animal.__proto__ === Function.prototype); // true
// // console.log(a1.__proto__.__proto__ === Object.prototype);// true
// console.log(Object.prototype.__proto__);//null



// function Person() {
    
// }
// const p1 = new Person();
// const p2 = new Person();

// console.log('----p1',p1.__proto__ === p2.__proto__);


var A =  {
  color:'color'
}

var B =  {
  name:'name'
}

var C = {
  type:'type'
}

C.__proto__ = B
B.__proto__ = A

console.log(C.color);
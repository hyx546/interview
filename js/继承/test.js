// function Person(name) {
  //   this.name = name;
  // }

  // Person.prototype.sayName = function(welcome){
  //   console.log(welcome,this.name);
  // }

  // const person1 = new Person('12222');

  // person1.sayName('hyx') // hyx,12222

  var a = function () { this.b = 3; }
  var c = new a();
  a.prototype.b = 9;
  var b = 7;
  a();
  console.log(b); // 7
  console.log(c.b) // 3

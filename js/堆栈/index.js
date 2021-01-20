function test(preson) {
  preson.age = 26;
  preson = {
    name:'123',
    age:"18"
  }
  return preson
}

const p1 = {
  name:'456',
  age:19
}

const p2 = test(p1);

console.log(p1);
console.log(p2);
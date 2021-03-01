function myCreate(proto){
  function F() {};
  F.prototype = proto;
  return new F();
}

let a = myCreate([1,2,3])
console.log(a);
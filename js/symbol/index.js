const obj ={}
const a = Symbol('a');

obj.a = 100;
obj[a] = 'a';

const b = Symbol('b');
obj[b] =200

for(let i in obj){

}
console.log('----obj',obj);

console.log('----',Object.getOwnPropertySymbols(obj));
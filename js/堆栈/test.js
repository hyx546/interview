// example 1  [b]:b最后都会被转化为字符串
// var a={}, b='123', c=123;  
// a[b]='b';
// a[c]='c';  
// console.log(a);
// console.log(a[b]);


// example 2  Symbol是唯一的，没有重复
// var a={}, b=Symbol('123'), c=Symbol('123');  
// a[b]='b';
// a[c]='c';  
// console.log(a[b]);


// // example 3
var a = {}, b = { key: '123' }, c = { key: '456' };
a[b] = 'b';
a[c] = 'c';

console.log(a[b]);


// 对象的键名只能是字符串和symbol
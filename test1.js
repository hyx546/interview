function constructorFunA() {
    console.log('这是一个构造函数A');
}


function constructorFunB() {
    console.log('这是一个构造函数B');
}

function constructorFunC() {
    console.log('这是一个构造函数C');
}

const instanceObj = new constructorFunA();

constructorFunC.prototype = constructorFunA.prototype;


console.log(instanceObj instanceof constructorFunA);
console.log(instanceObj instanceof constructorFunB);
console.log(instanceObj instanceof constructorFunC);
console.log(instanceObj instanceof Object);


console.log(instanceObj.__proto__.constructor === constructorFunA);
console.log(instanceObj.__proto__.constructor === Object);


function myNew(fun, ...agrs) {
    const obj = {};
    obj.__proto__ = fun.prototype;
    const result = fun.apply(this, agrs);
    return result instanceof Object ? result : obj;
}
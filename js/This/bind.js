const obj = {
    name: 'hyx',
    say(age, mes) {
        console.log(`${mes}, ${this.name},i am ${age} years old`);
    }
};
// obj.say('23', 'hello');

const A = {
    name: 'sm'
};

const B = {
    name: 'xt'
};

const C = {
    name: 'gggggg'
};

const sayA = obj.say.bind(A, '0.5', 'Hi');
console.log(sayA);
sayA();

Function.prototype.myBind = function (targetObj, ...outArgs) {
    targetObj = targetObj || window;
    const symbolKey = Symbol();
    targetObj[symbolKey] = this;
    return function (...innerArgs) {
        const result = targetObj[symbolKey](...innerArgs, ...outArgs);
        // delete targetObj[symbolKey];  不能销毁绑定的函数，否则第二次调用的时候，就会报错
        return result;
    };
};

const sayB = obj.say.myBind(B, '0.5', 'hello');
sayB();
sayB();

const sayC = obj.say.myBind(C, '2.5', 'hello,fffffff');
sayC();
const obj = {
    name: 'hyx',
    say(age, mes) {
        console.log(`${mes}, ${this.name},i am ${age} years old`);
    }
};
obj.say('23', 'hello');

const A = {
    name: 'sm'
};

const B = {
    name: 'xt'
};

Function.prototype.myApply = function (targetObj, args) {
    targetObj = targetObj || window;

    const symbolKey = Symbol();

    targetObj[symbolKey] = this;

    const result = targetObj[symbolKey](...args);
    delete targetObj[result];

    return result;
};


obj.say.myApply(B, ['0.5', 'Hi']);
obj.say.apply(A, ['24', 'Hello']);
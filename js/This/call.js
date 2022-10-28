// 使用

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

(function useCall() {
    obj.say.call(A, '24', 'Hi');
})();


// 实现

(function realizeCall() {
    Function.prototype.myCall = function (targetObj, ...args) {
        console.log(this);
        targetObj = targetObj || window;
        const symbolKey = Symbol();
        // 将函数指向绑定到新对象上
        targetObj[symbolKey] = this;
        // 将参数列表传入到函数里
        const result = targetObj[symbolKey](...args);
        delete targetObj[symbolKey];

        return result;
    };
    obj.say.myCall(B, '0.5', 'Hi');
})();
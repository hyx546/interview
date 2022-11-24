const deepFreeze = function (obj) {
    Object.freeze(obj);

    for (const key in obj) {
        const prop = obj[key];
        if (obj.hasOwnProperty(key) && typeof prop === 'object' && !Object.isFrozen(prop)) {
            deepFreeze(prop);
        }

    }
    return obj;
};



const obj = deepFreeze({
    a: 1,
    b: 2,
    c: {
        d: 1,
        e: {
            f: 3
        }
    }
});

obj.a = 'a';

console.log(obj);

obj.c.d = 'd';
console.log(obj);

obj.c.e.f = 'f';
console.log(obj);
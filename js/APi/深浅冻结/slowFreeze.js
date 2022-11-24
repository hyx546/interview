const obj = Object.freeze({
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
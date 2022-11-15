



const obj = {
    a: 1,
    [Symbol()]: 2,
    b: undefined,
    cb: function () { console.log(2); },
    ob: {
        c: 1,
        d: 2
    }
};

Object.defineProperty(obj, 'innumerable', {
    enumerable: false, value: ' not'
});

/** undefined / symblo / function 都会消失 */
const cloneObj = JSON.parse(JSON.stringify(obj));

console.log(cloneObj);

/**
 * 深拷贝
 * 缺点： 无法拷贝symbol类型
 * @param {*} obj 
 * @returns 
 */
function deepClone(obj) {
    if (!obj || typeof obj !== 'object') return;

    const cloneObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                cloneObj[key] = deepClone(obj[key]);
            }
            else {
                cloneObj[key] = obj[key];
            }
        }
    }
    return cloneObj;
}

const cloneObj1 = deepClone(obj);

console.log(cloneObj1);

cloneObj1.ob.d = 3;

console.log(cloneObj1, obj);
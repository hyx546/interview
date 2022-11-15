/**
 * 只能对第一层对象进行浅拷贝
 * @param {*} object 
 * @returns 
 */
function slowCopy(object) {
    if (!object || typeof object !== 'object') return;

    const cloneObject = Array.isArray(object) ? [] : {};

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            cloneObject[key] = object[key];
        }
    }

    return cloneObject;
}

const obj = { a: 1, b: 2, c: { d: 3 } };

const obj1 = obj;

const cloneObj = slowCopy(obj);

console.log(cloneObj, obj, obj1);

obj.b = 3;
obj.c.d = 4;

console.log('change', cloneObj, obj, obj1);
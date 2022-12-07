/**
 * 比较两个对象是否相等
 * 1. 通过Objetc.getOwnPropertyNames(obj) 获取对象的所有属性名组成的数组
 * 2. 比较两个属性名组成的数组是否一致
 * 3. 比较键值是否一致
 * 4. 键值如果是对象，继续调用方法进行遍历递归
 */

function deepObjectEqual(obj1, obj2) {

    const props1 = Object.getOwnPropertyNames(obj1);
    const props2 = Object.getOwnPropertyNames(obj2);

    if (props1.length !== props2.length) return false;

    for (let i = 0; i < props1.length; i++) {
        const key = props1[i];

        const val1 = obj1[key];
        const val2 = obj2[key];

        if (val1 && typeof val1 === 'object') {
            return deepObjectEqual(val1, val2);
        }
        if (val1 !== val2) return false;

    }
    return true;
};


const obj1 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: 4,
            g: {
                h: 5
            }
        }
    }
};

const obj2 = {
    b: 2,
    a: 1,
    c: {
        d: 3,
        e: {
            f: 4,
            g: {
                h: 5
            }
        }
    }
};

console.log(obj1 === obj2);
/** 使用JSON.stringify */
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

console.log(deepObjectEqual(obj1, obj2));
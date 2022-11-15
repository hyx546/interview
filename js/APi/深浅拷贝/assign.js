function myAssign(targetObj, ...sourceObjs) {
    if (targetObj === null || targetObj === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    let ret = Object(targetObj);
    sourceObjs.forEach((obj) => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                ret[key] = obj[key];
            }
        }
    });
    return ret;
}

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
console.log(myAssign({ a: 2 }, obj, { c: 3 }));
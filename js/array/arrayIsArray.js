/**
 * 实现Array.isArray()
 * @param {*} arr 
 * @returns 
 */
Array.myIsArray = function (arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
};


console.log(Array.myIsArray({}));
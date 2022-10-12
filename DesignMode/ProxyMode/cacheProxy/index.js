const addAll = () => {
    const arr = arguments || [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

const proxyAddAll = (function () {
    const resultCache = {};
    return () => {
        const args = Array.prototype.join.call(arguments, ',');
        if (args in resultCache) {
            return resultCache[args];
        }
        return resultCache[args] = addAll(...arguments);
    };
})();

console.log(proxyAddAll([1, 2, 3, 4, 5, 6]));
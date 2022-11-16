Array.prototype.myFlat = function () {
    // let result = [];
    // this.forEach(item => {
    //     if (Array.isArray(item)) {
    //         result = result.concat(item.myFlat());
    //     }
    //     else {
    //         result.push(item);
    //     }
    // });
    // return result;
    return this.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? cur.myFlat() : cur);
    }, []);
};

const arr = [1, [2, [3, 4, 5]]];

console.log(arr.myFlat());
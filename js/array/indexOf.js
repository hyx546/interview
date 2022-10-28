Array.prototype.myIndexOf = function (target, start = 0) {
    if (start < 0) start += this.length;
    if (start >= this.length) return -1;
    for (let i = start; i < this.length; i++) {
        if (this[i] === target) {
            return i;
        }
    }
    return -1;
};

console.log([1, 2, 3, 4].myIndexOf(4, -2));
console.log([1, 2, 3, 4].indexOf(4, -2));
/**
 * 乱序输出
 * @param {*} arr 
 */
function randomOutput(arr) {
    for (let i = 0; i < arr.length; i++) {
        const randomIndex = Math.floor(Math.random() * (arr.length - 1 - i)) + i;
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
}

const arr = [34, 5, 7, 2, 4, 1, 23, 4, 5, 7, 8];
console.log(randomOutput(arr));
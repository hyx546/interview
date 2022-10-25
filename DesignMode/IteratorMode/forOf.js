/** 模拟for of 的实现 */
const arr = [1, 2, 3];

const iterator = arr[Symbol.iterator]();

let now = { done: false };

while (!now.done) {
    now = iterator.next();
    if (!now.done) {
        console.log(`现在遍历到了${now.value}`);
    }
}
// 创建对象的三种方式

const object1 = { name: 'hyx' };
const createObj = new Object(object1);


const object2 = function () {
    this.name = 'hyx';
};
const createObj2 = new object2();


const object3 = { name: 'hyx' };
const createObj3 = Object.create(object3);

console.log(createObj, createObj2, createObj3);
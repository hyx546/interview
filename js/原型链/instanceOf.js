function myInstanceOf(left, right) {
    let rightValue = right.prototype;
    let leftVaule = left.__proto__;
    while (true) {
        if (!leftVaule) return false;
        if (leftVaule === rightValue) return true;

        leftVaule = leftVaule.__proto__;
    }
}

const Obj1 = function () { };

const Obj2 = function () { };

const obj1 = new Obj1();

console.log(obj1 instanceof Obj1);
console.log(obj1 instanceof Obj2);
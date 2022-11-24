# Object.assign

assign第一层拷贝是深拷贝，二层以上即是浅拷贝

- Object.assign(targetObj, sourceObj1,sourceObj2...)

targetObj 不能为null/object，否则会报错
targetObj 如果是基本数据类型，Object会进行装箱转换为对象;

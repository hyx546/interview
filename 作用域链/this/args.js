function exam(a, b, c, d, e) {

  // 先看看函数的自带属性 arguments 什么是样子的
  console.log(arguments);

  // 使用call/apply将arguments转换为数组, 返回结果为数组，arguments自身不会改变
  var arg = [].slice.call(arguments);
  console.log(arg);
}

exam(2, 8, 9, 10, 3);

function add () {
  // 第一次执行时，定义了一个数组专门用来储存所有的参数
  var _args = [].slice.call(arguments);

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var adder = function() {
    var _adder = function() {
      _args.push(...arguments);
      return _adder;
    }

    // 当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function() {
      return _args.reduce((a,b) => a+b)
    }

    return _adder;
  }

  return adder(..._args);
}



var a = add(1,2,3,4,5);
var b = add(1)(2)(3)(4)(5);

console.log(a+10);
console.log(b+10);


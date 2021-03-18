
function add(){
  let args = [].slice.call(arguments);

  function adder (){
    function _adder(){
      args.push(...arguments);
      return _adder
    }

    _adder.toString = function(){
      return args.reduce((a,b) => a+b,0)
    }
    return _adder
  }

  return adder(...args)
}

console.log(add(1)(2)(3).toString());
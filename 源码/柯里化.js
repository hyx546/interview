function add() {
  let agrs = [].slice.call(arguments);

  const adder = function(){

    const _adder = function(){
      agrs.push(...arguments);
      return _adder
    }

    _adder.toString = function() {
      return agrs.reduce((a,b) => a+b,0)
    }

    return _adder
  }
  return adder(...agrs)
}




console.log(add(1)(2)(3)(4)(5));
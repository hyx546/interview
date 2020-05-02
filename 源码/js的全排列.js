function permutate(str) {
  var result = [];
  if(str.length > 1) {
  var left = str[0];
  var rest = str.slice(1, str.length);
  var preResult = permutate(rest);
  for(let i=0; i<preResult.length; i++) {
    for(let j=0; j<preResult[i].length; j++) {
    var tmp = preResult[i].slice(0, j) + left + preResult[i].slice(j, preResult[i].length);
    result.push(tmp);
    }
  }
  } else if (str.length == 1) {
    return [str];
  }
  return result;
  }
console.log(permutate('abc'));

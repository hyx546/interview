/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let map = {
      '2':'abc',
      '3':'def',
      '4':'ghi',
      '5':'jkl',
      '6':'mno',
      '7':'pqrs',
      '8':'tuv',
      '9':'wxyz'
  }
  let str ='';
  let arr =digits.split('')
  arr.map(item => str+=map[item]);

  let newArr = str.split('')
  console.log(newArr);
};
letterCombinations('23')
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    let newArr = []
    for(let item of arr) {
       let word =  item.split('').reverse().join('')
       newArr.push(word)
    }
    return newArr.join(' ')
};

reverseWords("Let's take LeetCode contest")
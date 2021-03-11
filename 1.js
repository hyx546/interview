// 请只使用最基本的遍历来实现判断字符串a是否被包含在字符串b中，并且返回第一次出现的位置

// 要求：
// 1. 找不到返回 -1 ，
// 2. 算法效率尽量高，
// 3. 不要使用 indexOf 、正则、substr、substring、contain，slice 等数组和字符串对象现成的方法。

// // 例如 a = '34'; b = '1234567';  返回 2
// // 例如 a = '35'; b = '1234567';  返回 -1
// // 例如 a = '355'; b = '12354355';  返回 5

function isContain(a, b) {
  for(let i in b){
    if(a[0] === b[i]){
      let flag = true;
      for(let j in a){
        if(a[j] != b[Number(i)+Number(j)]){
          flag = false
        }
      }
      if(flag){
        return i
      }
    }
  }
  return -1
}

console.log(isContain('34', '1234567'));

// 提示：字符串内的字符可以直接用下标访问，不用分解。
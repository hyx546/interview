// 请用算法实现，从给定的无序、不重复的数组data中，取出n个数，使其相加和为sum，
// 并给出算法的时间/空间复杂度


function test(data, sum, n) {
  let res =[];
  function find(arr, sum, n,r) {
    if (sum == 0 && n == 0) {
      res.push(r)
      return true;
    }
    if (n < 0) return false;
    if (n > 0) {
      for (let i = 0; i < arr.length; i++) {
        let temp = arr.slice(i + 1);
        return find(temp, sum - arr[i], n - 1,[...r,arr[i]]) || find(temp, sum, n,r)
      }
    }
  }
  find(data,sum,n,[])
  return res
}

console.log(test([1, 2, 3, 4, 5, 6, 7], 100, 4));
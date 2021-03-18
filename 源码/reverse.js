function myReverse(arr) {
  return arr.reduceRight((total,val) => total.concat(val),[])
}

console.log(myReverse([1,2,3,4,5]));
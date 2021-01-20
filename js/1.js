/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let counts=[];
  let pre=0,n=s.length;
  while(pre<n){
      let c = s[pre];
      let count =0;
      while(pre <n&& s[pre] === c){
          count++;
          pre++
      }
      counts.push(count);
  }
  console.log(counts);
  let ans=0;
  for(let i=1;i<counts.length;i++){
      ans+=Math.min(counts[i],counts[i-1])
      console.log(ans);
  }
  console.log(ans);
};

countBinarySubstrings("00110011")
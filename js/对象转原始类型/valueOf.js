// 如何让if(a==1 && a==2)成立
// valueOf用于返回指定对象的原始值。
const a = {
  value:0,
  toString:function () {
    this.value++;
    return this.value
  },
  valueOf:function () {
    this.value++;
    return this.value
  }
}

console.log(a==1 && a==2);

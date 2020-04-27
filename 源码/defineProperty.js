// 如何实现一个私有变量，可以通过getName方法可以访问，不能直接访问
// defineProperty  直接在对象上添加一个新的属性，或修改对象上的现有属性

var obj = {
  name: 'hanyuxi',
  getName:function() {
    return this.name
  }
}
Object.defineProperty(obj,name,{
  
})

console.log();

console.log(NaN===NaN);



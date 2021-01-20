var _ = require('lodash');

// N次循环
// _.times(5,(a) => {
//   console.log(a);
// })

// 深层查找属性值
// var ownerArr = [{
//   "owner": "Colin",
//   "pets": [{"name": "dog1"}, {"name": "dog2"}]
// }, {
//   "owner": "John",
//   "pets": [{"name": "dog3"}, {"name": "dog4"}]
// }];

// let lodashMap = _.map(ownerArr,'pets[0].name')
// console.log(lodashMap);

// 深克隆对象
// var objA = {
//   "name":"戈德斯文"
// }
// var objB = _.cloneDeep(objA);
// console.log('objA',objA);
// console.log('objB',objB);
// console.log(objB === objA);


// 在指定范围内获取一个随机值
// console.log(_.random(15,20,true));

// Object.prototype.extend = function (obj) {
//   for (var i in obj) {
//     if (obj.hasOwnProperty(i)) {    //判断被扩展的对象有没有某个属性，
//       this[i] = obj[i];
//     }
//   }
// };

// var objA = { "name": "戈德斯文", "car": "宝马" };
// var objB = { "name": "柴硕", "loveEat": true };

// objA.extend(objB);
// console.log(objA); 

// console.log(_.assign(objA,objB));


// 从列表中随机的选择列表项
// var smartTeam = ["戈德斯文", "杨海月", "柴硕", "师贝贝"];
// console.log(_.sample(smartTeam));
// console.log(_.sampleSize(smartTeam,2));


// 判断对象中是否含有某对象
var smartPerson = {
  'name': '戈德斯文',
  'gender': 'male'
},
smartTeam = ["戈德斯文", "杨海月", "柴硕", "师贝贝"];

// console.log(_.includes(smartTeam,'戈德斯文',2));


// 遍历循环
// _(smartTeam).forEach((value,key) => {
//   console.log(key,value);
// })
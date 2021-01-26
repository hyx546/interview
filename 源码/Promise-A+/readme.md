# 术语
 - 1.promise 是一个有then方法的对象或者是函数，行为遵守本规范
 - 2.thenable 是一个有then方法的对象或者是函数
    - 作用：使promise的实现更具有通用性
 - 3.value 是promise状态成功的值，包括undefined/thenable或者是promise
 - 4.exception 是一个使用throw抛出的异常值
 - 5.reason 是promise状态失败时的值


## 2.1 Promise States
Promise 必须处于以下三个状态之一：pending，fulfilled或者rejected
 - 总结：promise的状态只能从pending变为fulfilled，或者从pengding变成rejected
## 2.2 then方法
promise必须提供一个then方法，来访问最终的结果
 - promise的then接受两个参数
    ` promise.then(onFulfilled,onRejected)`
 - onFulfilled,onRejected 必须是函数类型，且应该是微任务
 - then必须返回一个promise

## 2.3 resolve方法
 - promise.resolve(value) 返回一个以定值解析后的promise对象
   - 如果value是个thenable对象，返回的promise会“跟随”这个thenable的对象，采用它的最终状态。
   - 如果value是一个promise对象，那么就原封不动的返回这个promise对象；
   - 其他情况，直接返回以该值为成功状态的proimise对象

   - thenable对象采用settimeout 是根据原生promise对象执行的结果推断的，为了同样的执行顺序，增加setTimeout延时

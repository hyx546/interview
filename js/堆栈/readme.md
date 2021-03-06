# 栈溢出
 - 由于栈空间在内存中是连续的，所以通常我们都会限制调用栈的大小，如果当函数嵌套层数过深时，过多的执行上下文堆积在栈中会导致栈溢出

 ## 解决方法
  ### 引入宏任务
  - 宏任务就是  ` 消息队列中等待被主线程调用的事件 `
  - 可以使用setTimeout来解决栈溢出的问题， ->  就是将同步函数调用改为异步函数调用（封装为宏任务事件，添加进消息队列中）
  - 但是宏任务需要先放到消息队列中，如果宏任务的执行时间过长，那么就会影响到消息队列后面的宏任务的执行，而且这个影响是不可控的，因为无法得知宏任务需要多久才能执行完成

  ### 引入微任务
  - 微任务就是 `一种异步执行的函数，但是它的执行时机是在主函数执行结束之后，当前宏任务结束之前`

  - 解决了宏任务执行时机不可控的问题
  - 通俗的理解就是： v8会为每个宏任务维护一个微任务队列。当v8执行一段js代码时，会为这段代码创建一个环境对象，微任务队列就是存放在这个环境对象中，当执行代码过程中，碰到一个微任务。就是被添加到微任务队列中。等整段代码快要结束时，该环境对象也随之被销毁，但是在销毁前，v8会先处理微任务队列中的微任务

  - 因为微任务是在当前任务结束之前执行的，如果在微任务中循环触发新的微任务，那么将导致消息队列中其他任务没有机会被执行
  

## MutationObserver
  它使用来监听dom变动
 - 工作： 它是异步执行，微任务，要等到所有的dom操作结束后才触发
 - 为了应付dom操作频繁的特点，防止造成卡顿
 - 它会在浏览器的每一帧的空闲时间执行监听回调，监听不会影响主线程，但是回调会堵塞主线程
 - 有一个限制，如果100ms内主线程都处于未空闲状态，那么会强制触发
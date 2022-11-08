# 通信类

## 什么是同源策略及限制

同源策略： 限制一个源文档与另一个源文档进行交互，它是一种用于隔离潜在恶意文件的安全机制 源是指协议+域名+端口一致

限制：

1. Cookie、LocalStorage、和indexDB无法获取
2. Dom无法获取
3. Ajax 请求不能发送

## 前后端如何通信

1. Ajax 同源通信
2. websocket 不受同源限制
3. CORS

## 如何创建AJAX

- XMLHttpRequest(高级浏览器才支持，IE不支持)对象的工作流程

1. 声明创建一个XMLHttpRequest实例， 同时注意IE兼容性
2. 通过xhr.open()创建一个新的请求 - 可以将请求方法区分开判断
3. 通过xhr.send() 发送请求
4. xhronload 监听响应
    a. 监听成功和错误的状态码，
    b. 成功200/304/206（媒体资源比较大)，通过xhr.responseText获取到str类型，最终转化为JSON.parse(str);
    c. 错误及直接调用错误的回调方法

## 跨域通信的几种方式

- JSONP
原理：通过script标签异步加载
如何实现：

1. 创建一个回调函数，并把它挂载在window上
2. 将这个回调函数名作为参数，通过script标签的url传参给后端
3. 后端解析请求参数，返回回调函数的调用，并将数据作为回调函数的参数传递给前端
4. 前端接收到数据，调用回调函数

- Hash 改变不会刷新页面

- postMessage

postMessage(message, targetOrigin)

a.html
通过iframe标签嵌入b.html, 通过获取iframe调用postMessage发送给b.html，

b.html
通过message事件监听获取到来自a的数据，并且可以通过postMessage传递信息返回a.html

- websocket

1. onopen 发送信息
2. onmessage 接受信息
3. onclose 关闭连接

- cors

原理： 服务器端通过设置(`Access-Control-allow-origin`)就可以实现跨域
一般使用fetch 实现cors

- 简单请求

1. head、get、post三种请求方法
2. 请求头仅包括安全字段

- 非简单请求

不属于简单请求的就是非简单请求，对比简单请求就是多了一个预检操作

- 预检操作： 在发起正式的请求前，会先发送options请求，主要是为了询问浏览器该域名，请求方法等信息是否在服务器的白名单内

- 客户端请求`Origin`设置请求源

- 服务端`Access-Control-allow-origin`设置允许请求访问的源

[注意]： 如果跨域需要携带cookie怎么实现呢？

1. 客户端在请求中设置`withCredenticals`为true
2. 服务器在响应中设置`Access-Control-Allow-Credenticals`

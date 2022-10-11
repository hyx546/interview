# 了解跨域

## 何为跨域

- 跨域并不是请求发不出去，请求能够发出去，服务端也能收到请求并正常返回结果，只是结果被浏览器拦截了（由于同源策略）

- 相同协议，域名，端口号 即为同源，它是一个安全策略，用于限制一个源的文档与另外一个源的资源进行交互，主要帮助阻隔恶意文档，减少可能被攻击的媒介

- 具体的限制

 1. 通源策略限制了来自不同源的js脚本对当前DOM对象的读和写操作
 2. 限制了不同源站点读取当前的Cookie、LocalStorage等数据
 3. 限制了通过XMLHttpRequest等方式将站点的数据发送给不同源的站点

- 能跨域请求资源的标签

1. <script src=" " ></script>
2. <link rel="stylesheet" href="">
3. <img src="" />
4. <video></video>
5. <iframe>

# 跨域的解决方案

## JSONP (json with padding)

jsonp 就是利用了<script src="..."></script>

- 优点
简单兼容性好，可用于解决主流浏览器的跨域数据访问的问题

- 缺点
仅支持`get`方法，具有局限性，不安全也可能会遭受xss攻击

## CORS （cross-origin resource sharing）

- 实现CORS的关键在于后端： 服务端设置 `Access-Control-Allow-Origin` 就可以开启CORS，该属性表示哪些域名可以访问资源，设置通配符则表示所有网站都可以访问资源

- 可以分为简单请求和非简单请求

### 简单请求

请求方法是以下三种方法之一

1. HEAD
2. GET
3. POST

请求头仅包含安全的字段，如以下几种字段

### 非简单请求

不符合简单请求的即为复杂请求

- 复杂请求发起请求的时候则是会在正式通信之前进行一次预检请求（preflight request）

- 浏览器先询问服务器,当前源当前请求是否可以访问服务器资源，只有得到正确的答复,才会进行正式的请求

### 扩展 - 跨域时想携带cookie

- 只需要前端在发送Ajax请求的时候 withCredentials设置为true

- 后端设置"Access-Control-Allow-Credentials为true，同时注意Access-Control-Allow-Origin值不为*

## postMessage

html5 中的API，为数不多可以跨域操作window属性之一它可用于解决以下方面的问题：

1. 页面和其打开的新窗口的数据传递
2. 多窗口之间消息传递
3. 页面与嵌套的iframe消息传递
4. 上面三个场景的跨域数据传递

postMessage()方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递。

```
otherWindow.postMessage(message, targetOrigin, [transfer]);
```

message: 将要发送到其他 window的数据。
targetOrigin:通过窗口的origin属性来指定哪些窗口能接收到消息事件，其值可以是字符串"*"（表示无限制）或者一个URI。在发送消息的时候，如果目标窗口的协议、主机地址或端口这三者的任意一项不匹配targetOrigin提供的值，那么消息就不会被发送；只有三者完全匹配，消息才会被发送。
transfer(可选)：是一串和message 同时传递的 Transferable 对象. 这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。


## websocket

## 代理

## 总结

1. CORS支持所有类型的HTTP请求，是跨域HTTP请求的根本解决方案
2. JSONP只支持GET请求，JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。
3. 不管是Node中间件代理还是nginx反向代理，主要是通过同源策略对服务器不加限制。
4. 日常工作中，用得比较多的跨域方案是cors和nginx反向代理

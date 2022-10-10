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

## CORS （cross-origin resource sharing）

- 实现CORS的关键在于后端： 服务端设置 `Access-Control-Allow-Origin` 就可以开启CORS，该属性表示哪些域名可以访问资源，设置通配符则表示所有网站都可以访问资源

- 可以分为简单请求和非简单请求 

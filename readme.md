# js

## 判断 JS 数据类型

**### 基本类型**

 - Undefined，null, boolean, string,number,symbol,bigInt

 - 按值访问，可操作保存在变量中实际的值

 - 值被保存在 栈内存 中，占据固定大小的空间

**### 引用类型**

- 对象类型，包括：Object,Array,Function,Data

- 引用类型的值是按引用访问的

 - 保存在堆内存中的对象,不能直接访问操作对象的内存空间

**### 4 种判断数据类型方法**

Array.isArray()

 - 判断某个值是不是数组或类数组

**#### typeof**

 - 适用于判断基础类型

 - 可判断除 null 以外的基本数据类型

 - 因为 null 被认为是一个空的对象的引用

 - 转化为二进制，null 全为 0，在 js 中，前三个为 0 就被判断为对象

 - 判断引用类型，除了 function 全返回 object 类型

**#### instanceof**

 - 只能用来判断两个对象是否属于原型链的关系，不一定能获取对象的具体类型

 - Instanceof 不适用判断原始类型的值，只能用于判断对象是否从属关系

**#### constructor**

 - 每一个实例对象都可以通过 constructor 来访问它的构造函数

 ```tsx

[].**proto**.constructor === Array //true

 ```

 - Parent.prototype.constructor = Parent

 - 由于 undefined 和 null 是无效的对象，没有 constructor 属性，不能用这个方法来判断

 - 再重写原型对象的时候，需要给 constructor 重新赋值，来保证对象实例的类型不改变

**#### toString**

 - Object.prototype.toString 方法返回对象的类型字符串，因此可用来判断一个值的类型。

 - 因为实例对象有可能自义定 toString 方法，会被覆盖，所以使用时，最好加上 call

 ```tsx

Object.prototype.toString.call('1') //"[object String]"

 ```

**#### 总结**

 - Typeof 使用简单，但是只适用于判断基础类型数据

 - Instanceof 能判断引用类型，但是不能检测出基本类型，且不能跨 iframe 使用

 - constructor 基本能判断所有类型，除了 null 和 undefined，但是 constructor 容易被修改，也不能跨 iframe 使用

 - tostring 能判断所有类型，可将其封装为全能的 DataType()判断所有数据类型

**## 对象键名的转换**

 - 对象的键名只能是字符串和 Symbol 类型

 - 其他类型的键名会被转换为字符串类型

 - 对象转字符串默认会调用 toString 方法

**## for 循环的性能远远高于 forEach**

 - for 循环没有任何额外的函数调用栈和上下文

 - forEach 函数签名实际上是

 - forEach(callBack(currentValue,index,arr),thisValue)

 - 他不是普通的 for 循环的语法糖，还有诸多的参数和上下文需要在执行的时候考虑进来，

**## js 数组去重**

**## 广度优先遍历**

**## 深度优先遍历**

**## 原型链**

**## 继承**

**## es6 代码转 es5 的思路是什么**

babel：

 - 代码字符串转为 AST（抽象语法树）

 - es6 的 ast 转为 es5 的 ast

 - 转化后的 ast 转为代码字符串

**## es5 和 es6 除了写法外还有什么不同**

 - es5 和 es6 子类 this 生成的顺序不同

 - es5

 - es5 先生成子类实例，再调用父类的构造函数修饰子类实例

 - es6

 - this 需要在 constructor 中，使用 super()

 - 先生成父类实例，再调用子类的构造函数修饰父类实例

 - 差别

 - es6 可以继承内置对象

**## promise**

**### 同步还是异步**

 - promise 构造函数是同步的，then 也是同步的，then 里面的回调的异步的

**## 面向对象的设计一定是好的设计吗？**

**### 从继承的角度说**

 - 无法决定继承哪些属性，所有属性都得继承

 - 用面向组合的设计方式来解决

**# react**

**## props**

**### 1.为什么子组件不可以修改父组件传递的 props**

为了保证数据的单向流动，易于检测数据的流向，避免造成混乱

**## 生命周期**

**## 组件传参**

**## redux**

**## diff 算法**

**### 1.Virtual DOM 真的比操作原生 DOM 快吗？**

没有任何框架可以比纯手动的优化 DOM 操作更快，框架的意义就在于掩盖底层 DOM 操作，让自己的代码更容易维护。react 每次有改变，就需要重新 render

**## 列表写 key，作用**

 - key 是唯一的

 - Key 的作用就是更新组件时判断两个节点是否相同，相同就复用，不相同就删除旧的创建新的

为什么说“不带 key 可能性能更好”

 - 因为带唯一的 key 每次更新都不可能找到可复用的节点，不但要销毁和创建，在 dom 添加和移除节点对性能的影响很大

**## vuex 和 redux**

**### 1.为什么 vuex 和 mutation 和 redux 的 reducer 中不能做异步操作**

**#### 1.vuex**

 - vuex 的同步在 mutation 中，异步操作在 action

**#### 2.redux**

 - redux 的同步在 reducer，异步在中间件

vuex 和 redux 都是做状态管理的，要保证状态是可预测的，如果使用了异步操作，成功和失败不可预测，什么时候进行异步操作也是不可预测的，整个应用的状态都变得不可预测，违背了 redux 的设计原则

**###**

**# Vue**

**## Object.defineProperty 和 Proxy**

 - Object.defineProperty 无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应 (本身是可以监控到数组下标的变化的，由于考虑到性能和体验，vue 放弃了这个特性）

 - Object.defineProperty 只能劫持对象的属性，从而需要对每个对象的属性进行遍历，而 Proxy 可以劫持整个对象，并返回一个新的对象

 - Proxy 代理对象，代理数组，代理动态增加的属性

**# css**

**## z-index**

**## position**

**## flex**

**## BFC**

格式化上下文，可以被当作是隔离了的独立容器，容器里面的元素不会影响到外面的元素，

**### 触发 BFC**

 - html 根元素

 - float 浮动

 - 绝对定位

 - overflow 不为 visiable

 - display 为表格布局或弹性布局

主要作用：

 - 清除浮动

 - 防止同一 BFC 容器中的相邻元素间的外边距重叠问题

## Opacity,visibility,display:none

 - opacity：0(占据空间，可点击)，场景：与 transition 一起使用

 - visibility：hidden（占据空间，不可点击），场景：不会改变页面结构

 - display：none（不占据空间，不可点击），场景：会改变页面结构

**# http**

**## 状态码**

**## https**

**### 1.https 握手过程**

 - 客户端向服务端发起请求，并要求与服务端建立 ssl 连接

 - 服务端收到客户端请求后，会将网站的证书(公钥)返回给客户端

 - 客户端收到证书后会检查证书的合法性，随机生成一个密钥

 - 客户端通过公钥给会话密钥加密，并传送给服务端，服务端利用自己的私钥

**## 输入一个 url 到渲染的过程**

**## CSRF 和 XSS**

**### csrf**

跨站请求伪造，攻击者获取用户的 cookie，骗取服务端的信任

攻击的原因是：浏览器会自动带上 cookie，而不是带上 token

 - 验证码

 - 强制用户必须与运用进行交互

 - referer check

 - token 验证

 - 将请求放在攻击者不能伪造的信息中

**### xss**

跨站脚本攻击，攻击者在网站上注入一段恶意的客户端代码，通过恶意的脚本对客户端网页进行篡改，从而在用户浏览网页时，控制用户浏览器和获取用户隐私信息的一种攻击方法

现在主流的浏览器都内置了 xss 的措施，但是还是需要知道如何防止 xss 攻击

 - httpOnly 防止劫取 Cooki

 - 攻击者通过 xss 获取到 cookie 之后，浏览器会发起 cookie 劫持攻击，阻止 xss 攻击后的 cookie 劫持。

 - 输入输出检查

**## 热更新**

hot module replacement。 HMR

 - 代码发生修改并保存后

 - webpack 重新打包编译，将新的模块发送给浏览器端

 - 浏览器端通过新的替换旧的模块，

 - 不刷新浏览器就开业对应用进行更新

**## 浏览器缓存机制**

**### 强缓存和协商缓存**

**#### 强缓存**

不会向服务器发送请求，直接从缓存中读取资源，并且显示 from disk cache 或 from memory cache。强缓存可以通过设置两种 http header 实现：Expires 和 Cache-Control

 - Expires

相对于服务器的过期时间，如果在这之内，就会直接读取缓存，不再请求。

如果本地时间改变了，可能会造成缓存失效，是 http/1 的产物

 - Cache-Control

时间是 max-age，是 http/1.1 的产品，优先级比 expires 高

**#### 协商缓存**

 - Last-modified/if-Modified-since

 - Etag/if-none-match

当资源过期时，发现响应头如果有（Last-Modified/Etag) ,就会向请求的请求头带上（if-modified-since / if-none-match）,表示请求时间。

服务器接收到，就把这两个字段进行比较，如果资源最后修改的时间旧，就说明资源无需修改，返回 304，否则说明资源被修改过，走最新资源。

 - Last-Modifed/If-Modified-Since 的时间精度是秒，而 Etag 可以更精确。

 - Etag 优先级是高于 Last-Modifed 的，所以服务器会优先验证 Etag

 - Last-Modifed/If-Modified-Since 是 http1.0 的头字

**### 四种缓存**

**#### 1.Service Worker**

服务工人，服务于前端页面的独立后台线程。

特点：

 - 传输协议必须为 https，因为涉及到请求拦截，需要保障安全

 - 它可以自由控制缓存哪些文件，如何匹配，如何读取缓存

 - 缓存是持续性的

实现缓存的步骤：

 - 注册 Service Worker

 - 监听到 install 事件以后就可以缓存需要的文件

 - 下次访问，通过拦截请求的方式查询是否存在缓存

 - 存在，直接读取

 - 不存在，请求数据

【注意】：如果 service worker 没有命中缓存，需要调用函数去获取数据。换句话说，如果没有在 service worker 命中缓存，会根据缓存查找优先级去查找数据。但是无论是从 Memory Cache 还是从网络请求中获取数据，浏览器都是会显示从 service worker 中获取的内容

**#### 2.Memory Cache**

内存中的缓存，主要包含当前页面中已经抓取到的资源。eg：页面已经下载的样式、脚本、图片等。

 - 读取内存的数据比磁盘快

 - 持续性很短，会随着进程的释放而释放

 - 一旦关闭 tab 页面，内存中的缓存也就被释放了

 - 内存容量小

内存缓存有一块重要的缓存资源就是 preloader 相关指令，<link rel="preload">

【注意】：内存缓存在缓存资源时，并不关心返回资源的 http 缓存头 Cache-Control 是什么值，同时资源的匹配也并非仅仅是对 url 做匹配，还可能会对 Content-type，cors 等其他特征做校验。

**##### preload 和 prefetch**

**###### 1.preload 预加载**

预先加载当前页面需要的资源（关键的脚本，字体，主要图片）

**###### 2.prefetch 预读取**

用户将来可能跳转到其他页面需要使用的资源。

eg：如果 A 页面发起一个 B 页面的 prefetch 请求，这个资源获取的过程和导航请求可能是同步进行的，如果使用 preload，页面 A 离开时就会立即停止。

**#### 3.Disk Cache**

硬盘缓存

 - 读取速度慢

 - 容量大

 - 时效性长

特点：

 - 大文件一般是存储在硬盘里

 - 当内存使用率 高的话，文件优先存储进硬盘

**#### 4.Push Cache**

推送缓存 是 http/2 中的内存，当前三种都没命中时，他才会被使用。

 - 只在 session 中存在，一旦会话结束就释放

 - 缓存时间很短暂，大约 5 分钟左右

 - 非严格执行 http 头中的缓存指令

特点：

 - 所有的资源都能被推送，被缓存，但是 Edge 和 Safari 浏览器支持相对比较差

 - 可推送 no-cache 和 no-store 的资源

 - 一旦连接被关闭，Push Cache 就被释放

 - 只能被使用一次

**## 如何实现 token 加密**

**### 1.JWT(json web token)**

 - 前端随机生成一个数

 - 后端利用前端的随机数和加密算法，生成 token

 - 前端每次请求在 header 带上 token

 - 后端用同样的方法解密

JWT 认证 token 是无法做到自注销的

**### 2.干扰码**

- 使用客户端的 ua 或其他数据作为干扰码对 token 加密

## http2 的多路复用

### http1

- 每次请求都会建立一次 tcp 连接（3 次握手，四次挥手）
- 即使 keep-alive，一次连接可以用多次，但是同一时刻只能有一个 http 请求

- 两个效率上的问题
  - 串型的文件传输，a 在发起请求，b 只能等待
  - 连接数过多，等过多请求，只能等待

### http2

- 同一个 tcp 连接，可以发起多个请求
- 避免队头阻塞问题

## 3 次握手

确保双方都能接收和发送的能力

1：确保 a 可以发送

2：确保 b 可以接收和发送

3:确保 a 可以接受

## 4 次挥手

a：我要关闭了

b：稍等，我检查下是否传输完了

b：确认完毕，可以关闭了

a：你关闭吧，不用回复了

## 一个 tcp 连接，服务器崩溃

- 服务器不重启，客户端继续工作，就会发现对方没有反应，超时
- 服务器重启，客户端继续工作，然而服务器已经丢失客户信息，收到客户端数据后响应 RST

### setState 同步异步问题

其实 setState 一直都是同步的，产生异步的原因是：多个 state 合并到一块进行批量更新。

- 生命周期调用是异步的
- 原生 js 绑定事件，setTimeout 等是同步的

# js

## 判断 JS 数据类型

### 基本类型

 - Undefined，null, boolean, string,number,symbol,bigInt

 - 按值访问，可操作保存在变量中实际的值

 - 值被保存在 栈内存 中，占据固定大小的空间

### 引用类型

- 对象类型，包括：Object,Array,Function,Data

- 引用类型的值是按引用访问的

 - 保存在堆内存中的对象,不能直接访问操作对象的内存空间

### 4 种判断数据类型方法

Array.isArray()

 - 判断某个值是不是数组或类数组

#### typeof

 - 适用于判断基础类型

 - 可判断除 null 以外的基本数据类型

 - 因为 null 被认为是一个空的对象的引用

 - 转化为二进制，null 全为 0，在 js 中，前三个为 0 就被判断为对象

 - 判断引用类型，除了 function 全返回 object 类型

#### instanceof

 - 只能用来判断两个对象是否属于原型链的关系，不一定能获取对象的具体类型

 - Instanceof 不适用判断原始类型的值，只能用于判断对象是否从属关系

#### constructor

 - 每一个实例对象都可以通过 constructor 来访问它的构造函数

```tsx
[].proto.constructor === Array //true

```

 - Parent.prototype.constructor = Parent

 - 由于 undefined 和 null 是无效的对象，没有 constructor 属性，不能用这个方法来判断

 - 再重写原型对象的时候，需要给 constructor 重新赋值，来保证对象实例的类型不改变

#### toString

 - Object.prototype.toString 方法返回对象的类型字符串，因此可用来判断一个值的类型。

 - 因为实例对象有可能自义定 toString 方法，会被覆盖，所以使用时，最好加上 call

```tsx
Object.prototype.toString.call('1') //"[object String]"

```

#### 总结

 - Typeof 使用简单，但是只适用于判断基础类型数据

 - Instanceof 能判断引用类型，但是不能检测出基本类型，且不能跨 iframe 使用

 - constructor 基本能判断所有类型，除了 null 和 undefined，但是 constructor 容易被修改，也不能跨 iframe 使用

 - tostring 能判断所有类型，可将其封装为全能的 DataType()判断所有数据类型

## 对象键名的转换

 - 对象的键名只能是字符串和 Symbol 类型

 - 其他类型的键名会被转换为字符串类型

 - 对象转字符串默认会调用 toString 方法

## for 循环的性能远远高于 forEach

 - for 循环没有任何额外的函数调用栈和上下文

 - forEach 函数签名实际上是

 - forEach(callBack(currentValue,index,arr),thisValue)

 - 他不是普通的 for 循环的语法糖，还有诸多的参数和上下文需要在执行的时候考虑进来，

## 广度优先遍历

 - 从根节点出发，在横向遍历二叉树层节点的基础上纵向遍历二叉树
 - 队列的形式实现

## 深度优先遍历

 - 从根节点出发，沿着左子树的方向进行纵向遍历，直到叶子节点为止，回溯到上一节点，
 - 开始右子树节点的纵向遍历，直至遍历完所有的节点
 - 递归，栈的形式实现

## 原型链

 当要找一个对象的属性时，先去对象实例上找，找不到再去对象的构造函数的prototype上找，找不到继续去构造函数原型的原型上找，直到找到Object.prototype为止，如果没有，则为null

## 继承

### 原型链继承

 - Child.prototype = new Parent()
 - 所有的子类都会共用一套原型链，当a改变父类的原型上的属性，b中也会改变

### 构造函数继承

``` function Child(){
Parent.call(this,...arguments)
 }
```

 - 子类相当于复制一份父类的属性和方法，所以他们是独立的
 - 子类无法访问到父类上的原型链的属性和方法

### 寄生组合继承

 - 子类原型上的constructor需要指回给子类的构造函数
 - 结合了两个的，子类既是独立的，又可以访问父类上的属性和方法
 - 缺点：父类的构造函数调用的太频繁，会影响性能

## 继承

## es6 代码转 es5 的思路是什么

babel：

 - 代码字符串转为 AST（抽象语法树）

## es5和es6继承除了写法外还有什么不同

- es5和es6子类this生成的顺序不同
- es5
  - es5先生成子类实例，再调用父类的构造函数修饰子类实例
- es6 (class)
  - this需要在constructor中，使用super()
  - 先生成父类实例，再调用子类的构造函数修饰父类实例
- 差别
  - es6可以继承内置对象

## promise

- es6 新增的一种带有.then的函数或方法的异步语法，解决了回调地狱
- promise一共有三种状态，分别是：'pending','fulfilled','rejected',状态只能从pending变为fulfilled或者rejected，一旦改变，状态是不可逆的。

### then 

 - 用来访问promise最终的结果
 - 接受两个可选函数参数，并返回一个promise对象，且能被同一个promise调用多次

### resolve(value)

 - 返回一个以定值解析后的promise
 - 如果value是promise，直接返回value
 - 如果value是thenable,返回的promise跟随thenable，采用他的最终状态
 - 如果value是其他，则返回以该值为成功状态的对象

### reject

 - reject和resolve不同，它的参数直接作为reject的理由，作为后续方法的参数

 - es5 和 es6 子类 this 生成的顺序不同

 - es5

 - es5 先生成子类实例，再调用父类的构造函数修饰子类实例

 - es6

 - this 需要在 constructor 中，使用 super()

# react

从外到里，从里到外

### 1.为什么子组件不可以修改父组件传递的props

 - promise 构造函数是同步的，then 也是同步的，then 里面的回调的异步的

## 面向对象的设计一定是好的设计吗？

### 从继承的角度说

## 生命周期

- componentWillmount (废弃)
  在渲染的过程中可能会执行多次
- componentDidmount 
  在渲染过程中永远只会执行一次
  一般都是在componentDidMount 里面执行副作用，进行异步操作
- componentWillreceiveProps （getDerivedStateFromProps）

### getDerivedStateFromProps

getDerivedStateFromProps(nextProps,prevState):接收父组件传递过来的 props 和组件之前的状态，
将父组件传递过来的props映射到子组件的state上

- showComponentUpdate 
- componentWillUpdate （getSnapshotBeforeUpdate）

### getSnapshotBeforeUpdate 

getSnapshotBeforeUpdate(prevProps,prevState):接受父组件传过来的props和组件之前的状态，
此生命周期钩子必须有返回值，返回值作为第三个参数传递给componentDidUpdate(必须一起使用，否则报错)

作用：在组件更新前，获取一些信息（滚动位置），实例：每次组件更新前都能去获取之前的滚动位置

- componentDidUpdate
- componentWillunmount

 - 用面向组合的设计方式来解决

### setState 同步异步问题

其实 setState 一直都是同步的，产生异步的原因是：多个 state 合并到一块进行批量更新。

## 组件传参

## redux

## diff 算法

- 根据js对象构建出一棵真实的DOM树，插到文档中
- 当状态变化时，重新构造出一棵新dom树，通过比较新旧树，记录差异
- 最后把记录的差异应用到所构建的真正dom树上，更新视图

## 1.Virtual DOM 真的比操作原生 DOM 快吗？

没有任何框架可以比纯手动的优化 DOM 操作更快，框架的意义就在于掩盖底层 DOM 操作，让自己的代码更容易维护。react 每次有改变，就需要重新 render

## 列表写 key，作用

 - key 是唯一的

 - Key 的作用就是更新组件时判断两个节点是否相同，相同就复用，不相同就删除旧的创建新的

为什么说“不带 key 可能性能更好”

 - 因为带唯一的 key 每次更新都不可能找到可复用的节点，不但要销毁和创建，在 dom 添加和移除节点对性能的影响很大

## vuex 和 redux

###  1.为什么 vuex 和 mutation 和 redux 的 reducer 中不能做异步操作

#### 1.vuex

 - vuex 的同步在 mutation 中，异步操作在 action

####  2.redux

 - redux 的同步在 reducer，异步在中间件

vuex 和 redux 都是做状态管理的，要保证状态是可预测的，如果使用了异步操作，成功和失败不可预测，什么时候进行异步操作也是不可预测的，整个应用的状态都变得不可预测，违背了 redux 的设计原则

##  Vue

##  Object.defineProperty 和 Proxy

 - Object.defineProperty 无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应 (本身是可以监控到数组下标的变化的，由于考虑到性能和体验，vue 放弃了这个特性）
 - Object.defineProperty 只能劫持对象的属性，从而需要对每个对象的属性进行遍历，而 Proxy 可以劫持整个对象，并返回一个新的对象



# css

## z-index

z-index 是用来调整元素和子元素在z轴上的顺序。通常来说，z-index 值较大的元素会覆盖较低的元素。

- 默认值是auto，可以是正负数
- 如果不考虑css3，只有定位元素(position:relative/absolute/fixed)的 z-index 才有作用

### 层叠水平

不同的DOM元素在一起发生重叠时，它们的显示顺序会遵循层叠水平的规则，而z-index就是用来调整某个元素的显示顺序

#### 著名的7阶层叠水平

- background/border
- z-index 负
- block
- float
- inline/inline-block
- z-index:auto /z-index:0
- z-index正

### 依赖 z-index 值创建层叠上下文的情况

- 定位元素(position:relative/absolute/fixed)
- flex 项(父元素 display 为 flex|inline-flex)，注意是子元素，不是父元素创建层叠上下文
  这两种情况下，需要设置具体的 z-index 值，不能设置 z-index 为 auto，这也就是 z-index: auto 和 z-index: 0 的一点细微差别


### 不需要配合 z-index 触发创建层叠上下文

- 元素的透明度 opacity 小于1
- 元素的 will-change 属性具备会创建层叠上下文的值

## position

- static 默认值 正常文档流
- relative 相对定位 相对于该元素在正常文档流的偏移量
- absolute 绝对定位 相对于static以外的最近的父级元素进行偏移
- fixed 固定定位 相对于浏览器进行定位
- sticky 当到达了阀值时，从relative变为sticky
  当设置了sticky，overflow必须是visible；z-index是无效的

##  flex

##  BFC

格式化上下文，可以被当作是隔离了的独立容器，容器里面的元素不会影响到外面的元素，

###  触发 BFC

 - html 根元素

 - float 浮动

- 绝对定位
- overflow不为visible
- display为表格布局或弹性布局

主要作用：

 - 清除浮动
 - 防止同一 BFC 容器中的相邻元素间的外边距重叠问题



## 垂直居中的方法

- 绝对定位+上下左右均为0
- 绝对定位+transform:translate()
- 绝对定位+margin负值法
- Margin:0 auto;
- Flex,

## Opacity,visibility,display:none

 - opacity：0(占据空间，可点击)，场景：与 transition 一起使用
 - visibility：hidden（占据空间，不可点击），场景：不会改变页面结构
 - display：none（不占据空间，不可点击），场景：会改变页面结构



## 多行元素的文本省略法

```css
display: -webkit-box
-webkit-box-orient:vertical
-webkit-line-clamp:3
overflow:hidden
```



## 双边距重叠问题

同正同负时，取绝对值较大的值

一正一负时，取相加



## 浮动清除

- overflow
- 给浮动的父元素也加上浮动
- :after伪元素



# html

## 1.Doctype作用

声明于文档最前面，告诉浏览器以何种方式来渲染页面

## 2.严格模式和混杂模式

### 1.严格模式

以该浏览器支持的最高标准允许

### 2.混杂模式

向后兼容，模拟老式浏览器，防止浏览器无法兼容页面

# 计算机网络

###  1.https 握手过程

 - 客户端向服务端发起请求，并要求与服务端建立 ssl 连接

- 客户端向服务端发起请求，并要求与服务端建立ssl连接
- 服务端收到客户端请求后，会将网站的证书(公钥)返回给客户端
- 客户端收到证书后会检查证书的合法性，随机生成一个密钥
- 客户端通过公钥给会话密钥加密，并传送给服务端，服务端利用自己的私钥解出会话的密钥
- 以后客户端和服务端就通过共同的密钥来进行对话


 - 客户端收到证书后会检查证书的合法性，随机生成一个密钥

 - 客户端通过公钥给会话密钥加密，并传送给服务端，服务端利用自己的私钥

## 输入一个 url 到渲染的过程

- 通过dns解析获取ip

为了寻找ip，会先查找缓存，查找缓存的顺序是：浏览器缓存，系统缓存，路由器缓存，最后查询dns服务器，获取ip

- 建立一个tcp连接，发起http请求

- 服务器端接收到请求，并对该请求作出响应，返回一个http报文
- 浏览器接收到信息，根据这个资源构建DOM树
- 根据样式构建一个以css对象为模型的cssom树
- 然后与dom合并为渲染树
- 进行布局，布局是为了确定元素的位置和尺寸
- 最后进行渲染



##  CSRF 和 XSS

###  csrf

跨站请求伪造，攻击者获取用户的 cookie，骗取服务端的信任

攻击的原因是：浏览器会自动带上 cookie，而不是带上 token

 - 验证码

 - 强制用户必须与运用进行交互

 - referer check

 - token 验证

 - 将请求放在攻击者不能伪造的信息中

###  xss

跨站脚本攻击，攻击者在网站上注入一段恶意的客户端代码，通过恶意的脚本对客户端网页进行篡改，从而在用户浏览网页时，控制用户浏览器和获取用户隐私信息的一种攻击方法

现在主流的浏览器都内置了 xss 的措施，但是还是需要知道如何防止 xss 攻击

 - httpOnly 防止劫取 Cookie

 - 攻击者通过 xss 获取到 cookie 之后，浏览器会发起 cookie 劫持攻击，阻止 xss 攻击后的 cookie 劫持。

 - 输入输出检查

##  热更新

hot module replacement。 HMR

 - 代码发生修改并保存后

- 代码发生修改并保存后
- webpack重新打包编译，将新的模块发送给浏览器端
- 浏览器端通过新的替换旧的模块，
- 不刷新浏览器就可以对应用进行更新


## 状态码

### 1XX

- 100 （临时响应）
  eg：post请求时，会先把请求头的信息发送给服务端，服务端检查后，返回100，post才能继续发送请求

### 2XX

- 200 （成功）
  服务端已经成功处理了请求

### 3XX

- 301 （永久重定向） 
  请求的网页已经永久的移到了新的位置，服务器响应时，会自动跳到新的位置，下次访问都是访问新的位置

- 302（临时重定向）
  请求的网页只是临时从不同的位置响应，下次继续访问时，依旧还是原有的位置

- 304 （协商缓存）

- 305 （使用代理）
  请求者只能使用代理访问请求的网页，如果服务器端返回此响应，表示请求者需要使用代理请求

### 4XX 

请求出错

- 400 (请求参数出错)
  请求的参数错误
- 401 （未授权）
  请求要求身份验证
- 403 （禁止访问）
  服务器拒绝请求
- 404（资源不存在）
- 405 （方法禁用）
  禁用请求的方法

### 5xx

服务端的问题

- 500 （服务器内部错误）
- 501 （尚未实施）
  服务器暂不具备完成请求的功能，如：服务器无法识别请求的方法，就会返回501
- 502 （错误网关）
  服务器作为网关和代理，从上游服务器收到无效的响应
- 503 （服务不可用）
- 504 （网关超时）
  服务器作为网关和代理，无法及时的从上游服务器收到请求
- 505 （不支持http版本）
  服务器不支持请求中所有的http版本

 - 浏览器端通过新的替换旧的模块，

 - 不刷新浏览器就开业对应用进行更新

##  浏览器缓存机制

###  强缓存和协商缓存

####  强缓存

不会向服务器发送请求，直接从缓存中读取资源，并且显示 from disk cache 或 from memory cache。强缓存可以通过设置两种 http header 实现：Expires 和 Cache-Control

 - Expires

相对于服务器的过期时间，如果在这之内，就会直接读取缓存，不再请求。

如果本地时间改变了，可能会造成缓存失效，是 http/1 的产物

 - Cache-Control

时间是 max-age，是 http/1.1 的产品，优先级比 expires 高

####  协商缓存

 - Last-modified/if-Modified-since

 - Etag/if-none-match

当资源过期时，发现响应头如果有（Last-Modified/Etag) ,就会向请求的请求头带上（if-modified-since / if-none-match）,表示请求时间。

服务器接收到，就把这两个字段进行比较，如果资源最后修改的时间旧，就说明资源无需修改，返回 304，否则说明资源被修改过，走最新资源。

 - Last-Modifed/If-Modified-Since 的时间精度是秒，而 Etag 可以更精确。

 - Etag 优先级是高于 Last-Modifed 的，所以服务器会优先验证 Etag

 - Last-Modifed/If-Modified-Since 是 http1.0 的头字

###  四种缓存

#### 1.Service Worker

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

#### 2.Memory Cache

内存中的缓存，主要包含当前页面中已经抓取到的资源。eg：页面已经下载的样式、脚本、图片等。

 - 读取内存的数据比磁盘快

 - 持续性很短，会随着进程的释放而释放

 - 一旦关闭 tab 页面，内存中的缓存也就被释放了

 - 内存容量小

内存缓存有一块重要的缓存资源就是 preloader 相关指令，<link rel="preload">

【注意】：内存缓存在缓存资源时，并不关心返回资源的 http 缓存头 Cache-Control 是什么值，同时资源的匹配也并非仅仅是对 url 做匹配，还可能会对 Content-type，cors 等其他特征做校验。

##### preload 和 prefetch

###### 1.preload 预加载

预先加载当前页面需要的资源（关键的脚本，字体，主要图片）

###### 2.prefetch 预读取

用户将来可能跳转到其他页面需要使用的资源。

eg：如果 A 页面发起一个 B 页面的 prefetch 请求，这个资源获取的过程和导航请求可能是同步进行的，如果使用 preload，页面 A 离开时就会立即停止。

#### 3.Disk Cache

硬盘缓存

 - 读取速度慢

 - 容量大

 - 时效性长

特点：

 - 大文件一般是存储在硬盘里

 - 当内存使用率 高的话，文件优先存储进硬盘

#### 4.Push Cache

推送缓存 是 http/2 中的内存，当前三种都没命中时，他才会被使用。

 - 只在 session 中存在，一旦会话结束就释放

 - 缓存时间很短暂，大约 5 分钟左右

 - 非严格执行 http 头中的缓存指令

特点：

 - 所有的资源都能被推送，被缓存，但是 Edge 和 Safari 浏览器支持相对比较差

 - 可推送 no-cache 和 no-store 的资源

 - 一旦连接被关闭，Push Cache 就被释放

 - 只能被使用一次

##  如何实现 token 加密

###  1.JWT(json web token)

 - 前端随机生成一个数

 - 后端利用前端的随机数和加密算法，生成 token

 - 前端每次请求在 header 带上 token

 - 后端用同样的方法解密

JWT 认证 token 是无法做到自注销的

### 2.干扰码

- 使用客户端的 ua 或其他数据作为干扰码对 token 加密

## http2 的多路复用

### 多路复用

允许同时通过单一的http/2连接发送多重请求

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





## cookie，sessionStorage，localStorage区别

共同点：都是同源的



## cookie session区别

- 1.cookie存放在客户的浏览器上，session数据放在服务器上
- 2.cookie不安全，考虑到安全性应当使用session
- 3.session会在一定时间内保存在服务器上。当访问增多，会比较占用服务器的性能
- 4.单个cookie保存的数据不能超过4k



## get和post的区别

- get参数通过url传递，post放在request body中
- get更不安全，因为参数直接暴露在url中，不能用来传递敏感信息
- get和post是tcp连接
- get产生一个tcp数据包，post产生两个tcp数据包
- get类似于查找，不需要每次都与数据库连接，所以可以使用缓存，post一般是做修改和删除，所以不行

# GraphQL

## restful

用url定位资源，用http描述操作

## GraphQL和Restful 的区别

- 扩展性，某个接口返回20个字段，但是前端可能只需要3个，但是restful会全部返回，增加了网络传输量，而graphql前端想要什么就可以让后端返回什么
- 减少网络业务请求，业务需求，前端需要调用多个独立的restful api才能获取到足够的数据，对于web端来说，由于有ajax并不会造成太大的影响，但是对于app来说，渲染的方式不同，必须拉取到全部的数据才开始绘制界面，而graphql直接可以在中间层的resolver层融合，前端只需要一个自定义的接口返回就行；
- 参数强校验，restful本身没有对参数的类型做规定，graphql提供了强类型的schema机制，从而天然确保了参数类型的合法性。





# webpack和gulp的区别

## Webpack

webpack是一个前端模块化方案，更侧重模块打包

## gulp

强调的的前端的工作流程
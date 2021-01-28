# js

## 判断JS数据类型

### 基本类型

- Undefined，null, boolean, string,number,symbol,bigInt
- 按值访问，可操作保存在变量中实际的值
- 值被保存在 栈内存 中，占据固定大小的空间

### 引用类型

- 对象类型，包括：Object,Array,Function,Data
- 引用类型的值是按引用访问的
- 保存在堆内存中的对象,不能直接访问操作对象的内存空间



### 4种判断数据类型方法

Array.isArray() 

- 判断某个值是不是数组或类数组

#### typeof

- 适用于判断基础类型

- 可判断除null以外的基本数据类型
  - 因为null被认为是一个空的对象的引用
  - 转化为二进制，null全为0，在js中，前三个为0就被判断为对象

- 判断引用类型，除了function 全返回object类型

#### instanceof

- 只能用来判断两个对象是否属于原型链的关系，不一定能获取对象的具体类型
- Instanceof 不适用判断原始类型的值，只能用于判断对象是否从属关系



#### constructor

- 每一个实例对象都可以通过constructor来访问它的构造函数

  ```tsx
  [].__proto__.constructor === Array //true
  ```

  

- Parent.prototype.constructor = Parent 

- 由于undefined和null是无效的对象，没有constructor属性，不能用这个方法来判断

- 再重写原型对象的时候，需要给constructor重新赋值，来保证对象实例的类型不改变



#### toString

- Object.prototype.toString 方法返回对象的类型字符串，因此可用来判断一个值的类型。

- 因为实例对象有可能自义定toString方法，会被覆盖，所以使用时，最好加上call

  ```tsx
  Object.prototype.toString.call('1') //"[object String]"
  
  ```

  

#### 总结

- Typeof 使用简单，但是只适用于判断基础类型数据
- Instanceof 能判断引用类型，但是不能检测出基本类型，且不能跨iframe使用
- constructor 基本能判断所有类型，除了null和undefined，但是constructor容易被修改，也不能跨iframe使用
- tostring能判断所有类型，可将其封装为全能的DataType()判断所有数据类型



## 对象键名的转换

- 对象的键名只能是字符串和Symbol类型
- 其他类型的键名会被转换为字符串类型
- 对象转字符串默认会调用toString方法

## for循环的性能远远高于forEach

- for循环没有任何额外的函数调用栈和上下文
- forEach函数签名实际上是
  - forEach(callBack(currentValue,index,arr),thisValue)
  - 他不是普通的for循环的语法糖，还有诸多的参数和上下文需要在执行的时候考虑进来，

## js数组去重

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

## es6代码转es5的思路是什么

babel：

- 代码字符串转为AST（抽象语法树）
- es6的ast转为es5的ast
- 转化后的ast转为代码字符串

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

### 同步还是异步

- promise 构造函数是同步的，then也是同步的，then里面的回调的异步的

## 面向对象的设计一定是好的设计吗？

### 从继承的角度说

- 无法决定继承哪些属性，所有属性都得继承
- 用面向组合的设计方式来解决

# react

## props

### 1.为什么子组件不可以修改父组件传递的props

为了保证数据的单向流动，易于检测数据的流向，避免造成混乱

## 生命周期

## 组件传参

## redux

## diff算法

### 1.Virtual DOM 真的比操作原生 DOM 快吗？

没有任何框架可以比纯手动的优化 DOM 操作更快，框架的意义就在于掩盖底层DOM操作，让自己的代码更容易维护。react每次有改变，就需要重新render

## 列表写key，作用

- key是唯一的

- Key 的作用就是更新组件时判断两个节点是否相同，相同就复用，不相同就删除旧的创建新的

  为什么说“不带key可能性能更好”

- 因为带唯一的key每次更新都不可能找到可复用的节点，不但要销毁和创建，在dom添加和移除节点对性能的影响很大



## vuex和redux

### 1.为什么vuex和mutation和redux的reducer中不能做异步操作

#### 1.vuex

- vuex的同步在mutation中，异步操作在action

#### 2.redux

- redux的同步在reducer，异步在中间件

vuex和redux都是做状态管理的，要保证状态是可预测的，如果使用了异步操作，成功和失败不可预测，什么时候进行异步操作也是不可预测的，整个应用的状态都变得不可预测，违背了redux的设计原则

### 

# Vue

## Object.defineProperty和Proxy

- Object.defineProperty无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应 (本身是可以监控到数组下标的变化的，由于考虑到性能和体验，vue放弃了这个特性）

- Object.defineProperty只能劫持对象的属性，从而需要对每个对象的属性进行遍历，而Proxy可以劫持整个对象，并返回一个新的对象
  - Proxy代理对象，代理数组，代理动态增加的属性

# css

## z-index

## position

## flex

## BFC

格式化上下文，可以被当作是隔离了的独立容器，容器里面的元素不会影响到外面的元素，

### 触发BFC

- html根元素
- float浮动
- 绝对定位
- overflow不为visiable
- display为表格布局或弹性布局

主要作用：

- 清除浮动
- 防止同一BFC容器中的相邻元素间的外边距重叠问题

## Opacity,visibility,display:none

- opacity：0(占据空间，可点击)，场景：与transition一起使用
- visibility：hidden（占据空间，不可点击），场景：不会改变页面结构
- display：none（不占据空间，不可点击），场景：会改变页面结构

# http

## 状态码



## https

### 1.https握手过程

- 客户端向服务端发起请求，并要求与服务端建立ssl连接
- 服务端收到客户端请求后，会将网站的证书(公钥)返回给客户端
- 客户端收到证书后会检查证书的合法性，随机生成一个密钥
- 客户端通过公钥给会话密钥加密，并传送给服务端，服务端利用自己的私钥

## 输入一个url到渲染的过程

## CSRF和XSS

### csrf

跨站请求伪造，攻击者获取用户的cookie，骗取服务端的信任

攻击的原因是：浏览器会自动带上cookie，而不是带上token

- 验证码
  - 强制用户必须与运用进行交互
- referer check
- token验证
  - 将请求放在攻击者不能伪造的信息中

### xss

跨站脚本攻击，攻击者在网站上注入一段恶意的客户端代码，通过恶意的脚本对客户端网页进行篡改，从而在用户浏览网页时，控制用户浏览器和获取用户隐私信息的一种攻击方法

现在主流的浏览器都内置了xss的措施，但是还是需要知道如何防止xss攻击

- httpOnly 防止劫取Cooki

  - 攻击者通过xss获取到cookie之后，浏览器会发起cookie劫持攻击，阻止xss攻击后的cookie劫持。

- 输入输出检查

  

## 热更新

hot module replacement。  HMR

- 代码发生修改并保存后
- webpack重新打包编译，将新的模块发送给浏览器端
- 浏览器端通过新的替换旧的模块，
- 不刷新浏览器就开业对应用进行更新

## 浏览器缓存机制

### 强缓存和协商缓存

#### 强缓存

不会向服务器发送请求，直接从缓存中读取资源，并且显示from disk cache 或from memory cache。强缓存可以通过设置两种http header实现：Expires 和 Cache-Control

- Expires

  相对于服务器的过期时间，如果在这之内，就会直接读取缓存，不再请求。

  如果本地时间改变了，可能会造成缓存失效，是http/1的产物

- Cache-Control

  时间是max-age，是http/1.1的产品，优先级比expires高

#### 协商缓存

- Last-modified/if-Modified-since
- Etag/if-none-match

当资源过期时，发现响应头如果有（Last-Modified/Etag) ,就会向请求的请求头带上（if-modified-since / if-none-match）,表示请求时间。

服务器接收到，就把这两个字段进行比较，如果资源最后修改的时间旧，就说明资源无需修改，返回304，否则说明资源被修改过，走最新资源。

- Last-Modifed/If-Modified-Since的时间精度是秒，而Etag可以更精确。

- Etag优先级是高于Last-Modifed的，所以服务器会优先验证Etag

- Last-Modifed/If-Modified-Since是http1.0的头字



### 四种缓存

#### 1.Service Worker

服务工人，服务于前端页面的独立后台线程。

特点：

- 传输协议必须为https，因为涉及到请求拦截，需要保障安全
- 它可以自由控制缓存哪些文件，如何匹配，如何读取缓存
- 缓存是持续性的

实现缓存的步骤：

- 注册Service Worker
- 监听到install事件以后就可以缓存需要的文件
- 下次访问，通过拦截请求的方式查询是否存在缓存
  - 存在，直接读取
  - 不存在，请求数据



【注意】：如果service worker没有命中缓存，需要调用函数去获取数据。换句话说，如果没有在service worker命中缓存，会根据缓存查找优先级去查找数据。但是无论是从Memory Cache 还是从网络请求中获取数据，浏览器都是会显示从service worker中获取的内容



#### 2.Memory Cache

内存中的缓存，主要包含当前页面中已经抓取到的资源。eg：页面已经下载的样式、脚本、图片等。

- 读取内存的数据比磁盘快
- 持续性很短，会随着进程的释放而释放
- 一旦关闭tab页面，内存中的缓存也就被释放了
- 内存容量小



内存缓存有一块重要的缓存资源就是preloader相关指令，<link rel="preload">



【注意】：内存缓存在缓存资源时，并不关心返回资源的http缓存头Cache-Control 是什么值，同时资源的匹配也并非仅仅是对url做匹配，还可能会对Content-type，cors等其他特征做校验。

##### preload和prefetch

###### 1.preload 预加载

预先加载当前页面需要的资源（关键的脚本，字体，主要图片）



###### 2.prefetch 预读取

用户将来可能跳转到其他页面需要使用的资源。

eg：如果A页面发起一个B页面的prefetch请求，这个资源获取的过程和导航请求可能是同步进行的，如果使用preload，页面A离开时就会立即停止。



#### 3.Disk Cache

硬盘缓存

- 读取速度慢
- 容量大
- 时效性长



特点：

- 大文件一般是存储在硬盘里
- 当内存使用率 高的话，文件优先存储进硬盘





#### 4.Push Cache

推送缓存 是http/2中的内存，当前三种都没命中时，他才会被使用。

- 只在session中存在，一旦会话结束就释放
- 缓存时间很短暂，大约5分钟左右
- 非严格执行http头中的缓存指令



特点：

- 所有的资源都能被推送，被缓存，但是Edge和Safari浏览器支持相对比较差
- 可推送no-cache 和no-store 的资源
- 一旦连接被关闭，Push Cache就被释放
- 只能被使用一次

## 如何实现token加密

### 1.JWT(json web token)

- 前端随机生成一个数
- 后端利用前端的随机数和加密算法，生成token
- 前端每次请求在header带上token
- 后端用同样的方法解密

JWT认证token是无法做到自注销的

### 2.干扰码

- 使用客户端的ua或其他数据作为干扰码对token加密

# GraphQL

## GraphQL和Restful 的区别
- 扩展性，某个接口返回20个字段，但是前端可能只需要3个，但是restful会全部返回，增加了网络传输量，而graphql前端想要什么就可以让后端返回什么
- 减少网络业务请求，业务需求，前端需要调用多个独立的restful api才能获取到足够的数据，对于web端来说，由于有ajax并不会造成太大的影响，但是对于app来说，渲染的方式不同，必须拉取到全部的数据才开始绘制界面，而graphql直接可以在中间层的resolver层融合，前端只需要一个自定义的接口返回就行；
- 参数强校验，restful本身没有对参数的类型做规定，graphql提供了强类型的schema机制，从而天然确保了参数类型的合法性。
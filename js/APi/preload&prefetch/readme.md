# preload 和 prefetch

- 相同点： 都是加载资源的一种方式
- 都是仅加载资源，不会执行
- 不会造成二次加载 —— 当该资源未加载完成前就执行，不会进行二次加载，而是等待第一次加载完成之后再执行

1. preload 是立即加载资源
2. prefetch 是等到浏览器空闲时间再去加载资源

## 副作用

1. preload，一旦页面关闭，它会立即停止preload加载的资源
2. prefetch 即使页面关闭，prefetch发起的请求仍然不会中断

## 优先级

1. 通过as来表示preload/prefetch的加载资源优先级
2. style表示最高优先级，没有as属性则表示该资源是异步请求

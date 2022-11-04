# DOM 事件类

## DOM事件的级别

- DOM0  element.onclick = function(){}

- DOM2  element.addEventListener('click', function(){},false)

- DOM3  element.addEventListener('keyup',function(){}, false)
  和dom2的区别是，增加了鼠标，键盘等类型事件

[注意]：为什么没有DOM1呢？ dom1标准制定的时候，没有涉及到事件的内容

## DOM事件模型

捕获 & 冒泡

## DOM事件流

浏览器在为当前页面和用户做交互的过程，
第一阶段： 捕获阶段
第二阶段： 目标阶段
第三阶段： 冒泡阶段

## 描述DOM事件捕获的具体流程

window                                        window
    document                            document
        html                        html
            body                body
                父级元素    父级元素
                    目标元素

## Event对象的常见应用

event.preventDefault(); // 阻止默认事件
event.stopPropagation(); // 阻止冒泡
event.stopImmediatePropagation(); // AB绑定在同一事件上， A事件中使用，可以阻止B执行, 事件选优先级
event.currentTarget // 当前所绑定的事件元素
event.target // 当前被点击的元素

## 自定义事件

通过 const eve = new Event('customer') 创建一个自定义事件
通过 dispatchEvent(event) 派发事件

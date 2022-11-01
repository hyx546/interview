# 盒模型

基本概念：标准模型 + IE模型
box-sizing

## 标准模型

浏览器默认盒模型是标准盒模型
box-sizing: content-box
盒子的总宽度 = width + padding + border + margin

## IE模型

box-sizing: border-box
盒子的总宽度 = width + margin
width = content + padding + border

## 标准模型 和 IE模型的区别

区别在于： 宽高计算方式不同, IE模型的宽度包含了padding + border，而标准盒模型就是指它的内容

## css如何设置这两种模型

1. box-sizing: content-box 标准盒模型
2. box-sizing: border-box IE盒模型

## js如何设置获取盒模型对应的宽和高

1. dom.style.width/height 只能取内联的宽高，对于外链不支持
2. dom.currentStyle.width 获取渲染之后的宽高， 但是只有IE支持
3. window.getComputedStyle(dom).width/height  通用性更好, 但是IE不支持

4. dom.getBoundingClientRect().width/ height 兼容性好，能够获取到元素相对于浏览器窗口视图的相对位置，返回上下左右, 获取到的宽度是width + padding + border
    但是对于IE浏览器，不支持width/height ，需要用right - left / bottom - top进行换算

## 根据盒模型解释边距重叠（实例题）

## BFC（边距重叠解决方案）

- BFC 块级格式化上下文， 可以将其看作一个独立空间，空间里的元素不会影响外面的布局
- 属于同一个BFC的相邻标签外边距会发生重叠
- BFC 不会与 浮动元素发生重叠
- 计算BFC高度时， 浮动元素参与计算

### 重叠问题的计算规则

- 都是正数时， 取最大值
- 一正一负， 两个值相加
- 都是负数时，取绝对值最大

### 触发BFC的属性

1. overflow: hidden
2. display: flex
3. display: table
4. position: absolute
5. position: fixed
6. float 不为none

### BFC解决的问题

1. float 脱离文档流， 导致高度塌陷
2. margin 重叠问题

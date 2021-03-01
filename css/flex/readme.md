# flex

弹性布局：分为主轴和交叉轴

- justify-content：主轴的对齐方式
- align-items：交叉轴对齐方式
- flex-direction：主轴的方向

flex是flex-grow，flex-shrink, flex-basis的缩写

- flex-basis:伸缩的基准值
- flex-grow:扩展的比例
- flex-shrink:伸缩的比例

## 计算子元素的宽度

- 先算出所有子元素flex-basis 的总基准值，判断是否溢出，计算出剩余/溢出的长度
- 计算出伸缩放大系数之和为
- 剩余空间分配如下：基准值+伸缩系数*每份的长度

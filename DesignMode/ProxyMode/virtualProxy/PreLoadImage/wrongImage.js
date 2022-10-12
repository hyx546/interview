/**
 * 这样写存在问题： PreLoadImage既要负责图片的加载，又需要负责DOM层面的操作
 * 好的做法是需要将这两个逻辑分离
 */

class PreLoadImage {
    // 占位图的url地址
    static LOADING_URL = 'xxxxx';

    constructor(imgNode) {
        // 获取真实的DOM节点
        this.imgNode = imgNode;
    }


    // 操作img节点的src属性
    setSrc(targetUrl) {
        // 初始化展示的是一个占位图
        this.imgNode.src = PreLoadImage.LOADING_URL;

        // 创建一个加载的实例
        const image = new Image();

        // 监听图片加载的情况，完成时再将DOM上的img节点的src设为目标的url
        image.onload = () => {
            this.imgNode.src = targetUrl;
        };

        image.src = targetUrl;
    }
}
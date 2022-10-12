/**
 * 使用两个类，一个做图片加载
 * 一个做DOM的操作
 */
class PreLoadImage {
    constructor(imgNode) {
        this.imgNode = imgNode;
    }

    setSrc(imgUrl) {
        this.imgNode.src = imgUrl;
    }
}

class ProxyImage {
    // 占位图的url地址
    static LOADING_URL = 'xxxxx';

    constructor(targetImage) {
        // 目标 Image， 即PreLoadImage实例
        this.targetImage = targetImage;
    }

    setSrc(targetUrl){
        this.targetImage.setSrc(LOADING_URL);

        const virtualImage = new Image();

        virtualImage.onload = () => {
            this.targetImage.setSrc(targetUrl);
        }

        virtualImage.src = targetUrl;
    }
}
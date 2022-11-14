function throttle(fn, ms) {
    let prev = 0;

    return function () {
        const self = this;
        let nowTime = Date.now();

        if (nowTime - prev > ms) {
            fn.apply(self, arguments);
            prev = Date.now();
        }
    };
}
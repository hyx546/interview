function throttle(fn, ms) {
    let prev = Date.now();

    return function () {
        const self = this;
        let nowTime = Date.now();

        if (nowTime - prev > ms) {
            fn.apply(self, arguments);
            prev = Date.now();
        }
    };
}
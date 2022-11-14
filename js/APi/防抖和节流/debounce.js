function debounce(fn, ms, immediate = false) {
    let timer = null;
    return function () {
        const self = this;
        if (timer) {
            clearTimeout(timer);
        }
        immediate && !timer && fn.call(self, ...arguments);
        timer = setTimeout(() => {
            timer = null;
            !immediate && fn.call(self, ...arguments);
        }, ms);
    };
}

debounce(() => console.log(111), 1000)();
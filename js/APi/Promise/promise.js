const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function myPromise(exector) {
    const self = this;
    self.state = PENDING;
    self.value = null;

    self.resolevdCallback = [];
    self.rejectefCallback = [];

    self._resolved = (value) => {
        if (value instanceof myPromise) {
            return value.myThen(self._resolved, self._rejected);
        }

        setTimeout(() => {
            if (self.state === PENDING) {
                self.value = value;
                self.state = FULFILLED;
                self.resolevdCallback.forEach((cb) => cb(value));
            }
        }, 0);
    };

    self._rejected = (error) => {
        setTimeout(() => {
            if (self.state === PENDING) {
                self.value = error;
                self.state = REJECTED;

                self.rejectefCallback.forEach((cb) => cb(error));
            }
        }, 0);
    };

    try {
        exector(self._resolved, self._rejected);
    } catch (error) {
        self._rejected(error);
    }
}


myPromise.prototype.myThen = function (resolveFn, rejectFn) {
    const self = this;
    resolveFn = typeof resolveFn === 'function' ? resolveFn : resolveFn => resolveFn;
    rejectFn = typeof rejectFn === 'function' ? rejectFn : rejectFn => rejectFn;

    return new myPromise((resolve, reject) => {
        function fulfilled() {
            try {
                const result = self._resolved(self.value);
                return result instanceof myPromise ? result().myThen(resolve, reject) : resolve(result);
            } catch (error) {
                reject(error);
            }
        }

        function rejected() {
            try {
                const result = self._rejected(self.value);
                return result instanceof myPromise ? result().myThen(resolve, reject) : reject(result);
            } catch (error) {
                reject(error);
            }
        }
        switch (self.state) {
            case PENDING:
                self.resolevdCallback.push(resolveFn);
                self.rejectefCallback.push(rejectFn);
                break;
            case FULFILLED:
                fulfilled();
                break;
            case REJECTED:
                rejected();
                break;
            default:
                break;
        }
    });
};

myPromise.prototype.myCatch = function (cb) {
    return this.myThen(null, cb);
};


const promise = (message, ms) => new myPromise((resolve) => setTimeout(() => {
    resolve(message);
}, ms));
promise(2222, 1000).myThen((data) => console.log('data', data));


const promise1 = (message, ms) => new Promise((resolve) => setTimeout(() => {
    resolve(message);
}, ms));
promise1(2, 1000).then((data) => console.log('data1', data));


const promise2 = (message, ms) => new myPromise((resolve, reject) => setTimeout(() => {
    reject(message);
}, ms));
promise2('2222 eeot', 1000).myThen((data) => console.log('data3', data), (error) => console.log('error2', error));


const promise3 = (message, ms) => new Promise((resolve, reject) => setTimeout(() => {
    reject(message);
}, ms));
promise3('error', 1000).then((data) => console.log('data3', data)).catch((error) => console.log('error3', error));

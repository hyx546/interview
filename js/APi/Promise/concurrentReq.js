function delay(interval, flag) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(interval);
        }, interval);
    });
}

const tasks = [
    () => delay(1001, true),
    () => delay(1003, true),
    () => delay(1004, true),
    () => delay(1008, true),
    () => delay(1002, true),
    () => delay(1005, true),
    // () => Promise.reject('error', false)
];

/**
 * Promise.all 并发控制
 * @param {*} tasks 
 * @param {*} limitNum 
 * @returns 
 */
function creatConcurrentRqe(tasks, limitNum) {
    // let index = 0;
    // const results = [];
    // let arr = new Array(limitNum).fill(null);

    // arr = arr.map(() => {
    //     return new Promise((resolve, reject) => {
    //         run();

    //         function run() {
    //             if (index >= tasks.length) {
    //                 resolve();
    //                 return;
    //             }
    //             const oldIndex = index++;
    //             const task = tasks[oldIndex];

    //             task().then((data) => {
    //                 results[oldIndex] = data;
    //                 run();
    //             }).catch((error) => reject(error));
    //         }
    //     });
    // });

    // return Promise.all(arr).then(() => results);

    let index = 0;
    const results = [];

    const len = tasks.length;

    return new Promise((resolve, reject) => {
        while (index < limitNum) {
            run();
        }

        function run() {
            const curIndex = index++;
            if (curIndex >= len) {
                resolve(results);
                return;
            }
            const task = tasks[curIndex];

            task().then((data) => {
                results[curIndex] = data;
                run();
            }).catch((error) => reject(error));
        }
    });

}


creatConcurrentRqe(tasks, 3).then((results) => {
    console.log('success->', results);
}).catch((reason) => {
    console.log('fail->', reason);
});

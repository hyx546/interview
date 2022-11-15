function promiseJson(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status === 200 || xhr.status === 304) {
                resolve(xhr.responseText);
            }
            else {
                reject(xhr.responseText);
            }
        };
        // 设置响应的数据类型
        xhr.responseType = "json";
        // 设置请求头信息
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send();
    });
}
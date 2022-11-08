/**
 * options = {
 * url:'',
 * type:'get'
 * data: {}
 * success: function
 * error: function
 * }
 * @param {*} options 
 */

const myJson = function (options) {
    const { url, type, data, success, error } = options;
    // 1.声明创建一个xmlhtmlrequest实例对象。需要判断xmlhttprequest 对象是否存在,做兼容性处理
    const xhr = XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject('Microsoft.XMLHTTP');

    const dataArr = [];

    // 将请求参数转化格式
    for (let key in data) {
        dataArr.push(key + '=' + data[key]);
    }
    // 2. 请求方式的区分
    if (type === 'GET') {
        url = url + '?' + dataArr.join('&');
        // 2. open 创建一个请求
        xhr.open(type, url.replace(/\?$/g, ''));
        // 3. 请求发送
        xhr.send();
    }
    else if (type === 'POST') {
        xhr.open(type, url);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send();
    }

    // 4. 请求响应
    xhr.onload = function () {
        if (xhr.status === 200 || xhr.status === 304) {
            let res;

            if (success && success instanceof Function) {
                res = xhr.responseText;
                if (typeof res === 'string') {
                    res = JSON.parse(res);
                    success.call(xhr, res);
                }
            }
        }
        else {
            if (error && error instanceof Function) {
                error.call(xhr, res);
            }
        }
    };
};
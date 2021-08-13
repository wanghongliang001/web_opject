function resolveDate(data) {
    var arr = []
    for (var k in data) {
        var str = k + '=' + data[k]
        arr.push(str)
    }
    return arr.join('&')
}


// 

function itheima(options) {
    // 创建xhr对象
    var xhr = new XMLHttpRequest()

    // 把外界传递过来的参数对象，转换成查询字符串
    var qs = resolveDate(options.data)
        // 判断请求方式
    if (options.method.toUpperCase() === 'GET') {
        // 发送get请求
        xhr.open(options.method, options.url + '?' + qs)
        xhr.send()
    } else if (options.method.toUpperCase() === 'POST') {
        // 发送post请求
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs)
    }

    // 注册监听
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // 把json字符串转换成json对象
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }

    }
}
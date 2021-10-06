function fibonacci(n) {
    return n <= 2 ? 1 : fibonacci(n-1) + fibonacci(n-2)//递归调用，函数内部调用自己
};
console.log(this)
var onmessage = function (event) {
    var number = event.data;
    console.log("分线程接受到主线程发送的数据： " + number);
    var result = fibonacci(number);
    postMessage(result);
    console.log("分线程向主线程返回数据： " + result);
    // alert(result) // 分线程中全局对象不是window
}
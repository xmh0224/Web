// function Fn() {
//
// }
//
// console.log(Fn.prototype);
// var fn = new Fn()
// console.log(fn.__proto__);
// // 给原型添加方法
// Fn.prototype.test = function () {
//     console.log('test()')
// }
// fn.test()


function Fn() {
    this.test1 = function (){
        console.log('test1()');
    }
}
Fn.prototype.test2 = function () {
    console.log('test2()');
}
var fn = new Fn()

fn.test1()
fn.test2()
console.log(fn.toString())
// console.log(Fn.prototype);
// var fn = new Fn()
// console.log(fn.__proto__);
// // 给原型添加方法
// Fn.prototype.test = function () {
//     console.log('test()')
// }
// fn.test()



//原型面试题
//测试题1
function A() {

}
A.prototype.n = 1

var b = new A()

A.prototype = {
    n: 2,
    m: 3,
}
var c = new A()
console.log(b.n, b.m, c.n, c.m);

//测试题2
function F() {}
Object.prototype.a = function () {
    console.log("a()")
}
Function.prototype.b = function () {
    console.log("b()");
}
var f = new F()
f.a()
// f.b()
F.a()
F.b()
console.log(f);
console.log(Object.prototype);
console.log(Function.prototype);








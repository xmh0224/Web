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











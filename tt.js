// function add() {
//     var temSlice = [].slice();
//     var params = temSlice.apply(arguments);
//     function currying() {
//         var arr = temSlice.apply(arguments);
//         params = params.concat(arr);
//         return currying;
//     }
//     currying.toString = function () {
//         var result = 0;
//         params.forEach(function (value) {
//             result += value;
//         });
//         return result;
//     }
//     return currying;
// }
// console.log(add(10))


// function add(a,b) {
//     var c,d,e;
//     try {
//         c = a.toString().split('.')[1].length;
//     }catch (f) {
//         c = 0;
//     }
//     try {
//         d = b.toString().split('.')[1].length;
//     }catch (f) {
//         d = 0;
//     }
//     return e = Math.pow(10,Math.max(c,d)),(mul(a,e) + mul(b,e)) / e;
//
// }
// console.log(add(10,20,30))


// function add(num) {
//     function fn(nextnum) {
//         num += nextnum;
//         return fn;
//     }
//     fn.valueOf = function () {
//         return num;
//     }
//     fn.toString = function () {
//         return num + '';
//     }
//     return fn
// }
//
// var result = add(10)(20)(30)
// console.log(+result);


// function accAdd(arg1,arg2){
//     var r1,r2,m;
//     try {
//         r1 = arg1.toString().split(".")[1].length
//     }catch (e) {
//         r1 = 0;
//     }
//     try {
//         r2 = arg2.toString().split('.')[1].length
//     }catch (e) {
//         r2 = 0;
//     }
//     m = Math.pow(10,Math.max(r1,r2));
//     return (arg1 * m + arg2 * m)/m
// }
// console.log(accAdd(1,3.1))

// function foo() {
//     console.log("first");
//     setTimeout(function () {
//         console.log('second');
//     },5)
// }
// for(var i=0;i<439;i++){
//     foo();
// }
// var a = false||typeof (4399 + ' ');
// console.log(a)

var words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

var longWords = words.filter(function (word) {
    return word.length > 6;
});
console.log(longWords);


function maxLengthBetweenEqualCharacters(s) {
    let map = {};
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] != undefined) {
            res = Math.max(res, i - map[s[i]]);
        } else {
            map[s[i]] = i;
        }
    }
    return res - 1;
}

module.exports = {
    maxLengthBetweenEqualCharacters: maxLengthBetweenEqualCharacters
}

console.log(maxLengthBetweenEqualCharacters("fwejfldskjf"))





































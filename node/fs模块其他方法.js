var fs = require("fs");

/*
//读取目录结构
fs.readdir('.',function (err,flies) {
    if(!err){
        console.log(flies);
    }

})
*/

/*
//创建文件夹
fs.mkdir('hello', function (err) {

});
*/

/*
//删除文件
fs.unlink('hello2.txt', function (err) {
    if(!err){
        console.log("文件已删除");
    }
});

*/
fs.unlink('hello3.txt', function (err) {
    if(!err){
        console.log("文件已删除");
    }
});

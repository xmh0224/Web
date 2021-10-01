var fs = require("fs")

// 同步操作
// var fd = fs.openSync("hello.txt","w")
// fs.writeSync(fd,"jiangjiajiashidashabi")
// fs.closeSync(fd)

// 异步操作
fs.open("hello2.txt","w",function (err,fd) {
    if(!err){
        fs.write(fd,"xumianhaoyeshidashabi",function (err){
            if(!err){
                console.log("文件开始写入")
            }
            fs.close(fd,function (err) {
                if(!err){
                    console.log("wenjianxieruwanbi")
                }
            })
        })
    }else{
        console.log(err)
    }
})
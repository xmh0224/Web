var fs = require("fs")
var ws = fs.createWriteStream("hello4.txt")
for(var i=0;i<10;i++){
    ws.write("aaaa" + i)
}



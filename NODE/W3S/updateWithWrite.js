var fs = require('fs');

fs.writeFile('mynewfile1.txt','hi,this is me!',function(err){
    if(err) throw err;
    console.log("updated");
});
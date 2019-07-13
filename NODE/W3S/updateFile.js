var fs = require('fs');
fs.appendFile('mynewfile3.txt','my new text!',function(err){
    if(err) throw err
    console.log('updated');
})
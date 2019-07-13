var fs = require('fs');

fs.rename('mynewfile1.txt','myfirstfile.txt',function(err){
    if(err) throw err;
    console.log('renamed');
});
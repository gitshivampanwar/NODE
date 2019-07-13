var fs = require('fs');
fs.writeFile('demofile.txt','hello file open',function(err)
{
    if(err) throw err;
    var rs = fs.createReadStream('./demofile.txt');
    rs.on('open', function () {
      console.log('The file is open');
    });
});
